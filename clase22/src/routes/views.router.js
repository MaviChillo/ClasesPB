import { Router } from "express";
import { auth, isLogged } from "../middlewares/auth.middleware.js";
import { jwtValidation } from "../middlewares/jwt.middleware.js";

const router = Router()

router.get('/registro',isLogged,(req,res)=>{
    res.render('registro')
})

router.get('/errorRegistro',(req,res)=>{
    res.render('errorRegistro')
})

router.get('/login',isLogged,(req,res)=>{
    res.render('login')
})

router.get('/perfil',(req,res)=>{
    res.render('perfil',{email:req.session.email})
})

router.get('/errorLogin',(req,res)=>{
    res.render('errorLogin')
})

router.get('/jwtFront', (req, res)=>{
    res.render('jwt')
})
export default router