import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { usersModel } from "../persistencia/models/users.model.js";
import {hashPassword} from '../utils.js';


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





