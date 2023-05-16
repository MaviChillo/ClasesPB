import { Router } from "express";

const router = Router();

//no llama al controller de views

router.get('/',(req,res)=>{
    res.render('register');
})

router.get('/login',(req,res)=>{
    res.render('login');
})
export default router;