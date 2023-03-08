import { Router } from "express";
import {generateToken, comparePasswords} from '../utils.js'
import {usersModel} from '../persistencia/models/users.model.js'
import { jwtValidation } from "../middlewares/jwt.middleware.js";

const router = Router()

router.post('/login', async (req, res)=>{
    const {email, password} = req.body
    const usuario = await usersModel.findOne({email})
    if(usuario){
        //comparar passwords
        const isPass = await comparePasswords(password, usuario.password)
        if(isPass){
            const token = generateToken(usuario)
            return res.json({token})
        }
    }else{
        return res.json({message: 'Usuario o contraseña invalida'})
    }
})

router.get('/validation', jwtValidation, (req,res)=>{
    res.json({user: req.user})
})


export default router