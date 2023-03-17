import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { usersModel } from "../dao/models/users.model.js";
import {hashData, compareData} from '../utils.js';
// import { Strategy as GitHubStrategy } from "passport-github2";
import {ExtractJwt ,Strategy as jwtStrategy} from "passport-jwt"

//passport local
//signup
passport.use('signup', new LocalStrategy({
    usernameField: 'email',//especificar que mi campo no es username, sino email
    passwordField: 'password',
    passReqToCallback: true //habilita recibir toda la info por req
},async(req, email, password, done)=>{
    try {
        const {firstName, lastName, dni} = req.body
        if(!firstName || !lastName || !dni || !email || !password){
            return done(null, false)
        }
        const usuario = await usersModel.findOne({email})
        if(usuario){
            return done(null, false)
        }
        const hashPassword = await hashData(password)
        const newUser = {...req.body, password:hashPassword, cursos:[]}
        //guardado del hash
        const newUserDB = await usersModel.create(newUser)
        done(null, newUserDB)
    } catch (error) {
        done(error)
    }
}))

//login
passport.use('login', new LocalStrategy({
    usernameField: 'email',//especificar que mi campo no es username, sino email
    passwordField: 'password',
    passReqToCallback: true //habilita recibir toda la info por req
},async(req, email, password, done)=>{
    try {
        const usuario = await usersModel.findOne({email})
        if(!usuario){
            return done(null, false)
        }
        const comparePassword = await compareData(password, usuario.password)
        if(!comparePassword){
            return done(null, false)
        }
        done(null, usuario)
    } catch (error) {
        done(error)
    }
}))


//passport github
// passport.use('githubRegistro', new GitHubStrategy({
//     clientID: 'Iv1.c4ec79fba1d1f84c',
//     clientSecret: '444e7f0044c719cb605534c041ca275ed32a7a22',
//     callbackURL: "http://localhost:3000/users/github"
//   },
//   async(accessToken, refreshToken, profile, done) => {
//     console.log(profile)
//     const usuario = await usersModel.findOne({email:profile._json.email})
//     if(!usuario){
//         const nuevoUsuario = {
//             first_name: profile._json.name.split(' ')[0],
//             last_name: profile._json.name.split(' ')[1] || ' ',
//             email: profile._json.email,
//             password: ' '
//         }
//         const dbResultado = await usersModel.create(nuevoUsuario)
//         done(null, dbResultado)
//     }else{
//         done(null, usuario)
//     }
//     // done(null, 'prueba')
//   }
// ));


//passport jwt
passport.use('jwt', new jwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secretKey'
}, async (jwt_payload, done)=>{
    try {
        done(null, jwt_payload.user)
    } catch (error) {
        done(error)
    }
    // console.log('----jwtpayload----', jwtPayload)
}))

//passport jwt con token en cookies

// const cookieExtractor = (req)=>{
//     const token = req?.cookies?.token
//     return token
// }

// passport.use('jwtCookies', new jwtStrategy({
//     jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
//     secretOrKey: 'secretJWT'
// }, async (jwtPayload, done)=>{
//     console.log('----jwtpayload----', jwtPayload);
//     done(null, jwtPayload.user)
// }))




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

