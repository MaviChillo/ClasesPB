import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { usersModel } from "../persistencia/models/users.model.js";
import {hashPassword} from '../utils.js';
import { Strategy as GitHubStrategy } from "passport-github2";
import {ExtractJwt ,Strategy as jwtStrategy} from "passport-jwt"

//passport local
passport.use('registro', new LocalStrategy({
    usernameField: 'email',//especificar que mi campo no es username, sino email
    passwordField: 'password',
    passReqToCallback: true //habilita recibir toda la info por req
},async(req, email, password, done)=>{
    const usuario = await usersModel.find({email})
    if(usuario.length!==0){
        return done(null, false)
    }
    const hashNewPassword = await hashPassword(password)
    const newUser = {...req.body, password:hashNewPassword}
    //guardado del hash
    const newUserBD = await usersModel.create(newUser)
    done(null, newUserBD)
}))


//passport github
passport.use('githubRegistro', new GitHubStrategy({
    clientID: 'Iv1.c4ec79fba1d1f84c',
    clientSecret: '444e7f0044c719cb605534c041ca275ed32a7a22',
    callbackURL: "http://localhost:3000/users/github"
  },
  async(accessToken, refreshToken, profile, done) => {
    console.log(profile)
    const usuario = await usersModel.findOne({email:profile._json.email})
    if(!usuario){
        const nuevoUsuario = {
            first_name: profile._json.name.split(' ')[0],
            last_name: profile._json.name.split(' ')[1] || ' ',
            email: profile._json.email,
            password: ' '
        }
        const dbResultado = await usersModel.create(nuevoUsuario)
        done(null, dbResultado)
    }else{
        done(null, usuario)
    }
    // done(null, 'prueba')
  }
));


//passport jwt
passport.use('jwt', new jwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secretJWT'
}, async (jwtPayload, done)=>{
    console.log('----jwtpayload----', jwtPayload);
    done(null, jwtPayload.user)
}))

//passport jwt con token en cookies

const cookieExtractor = (req)=>{
    const token = req?.cookies?.token
    return token
}

passport.use('jwtCookies', new jwtStrategy({
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey: 'secretJWT'
}, async (jwtPayload, done)=>{
    console.log('----jwtpayload----', jwtPayload);
    done(null, jwtPayload.user)
}))




//siempre setear estas dos funciones por default para funcionar internamente
//1
passport.serializeUser((usuario, done)=>{
    done(null, usuario._id)
})
//2
passport.deserializeUser(async(_id, done)=>{
    const usuario = await usersModel.findById(_id)
    done(null, usuario)
})





