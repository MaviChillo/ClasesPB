import { Router } from "express";
import Users from "../dao/Mongo/Users.js";


const router = Router();
const userService = new Users();

const authenticationMiddleware = (req,res,next) =>{
    const jwtCookie = req.cookies['CoderCookie'];
    if(jwtCookie) next()
    else return res.status(401).send('Not authenticated');
}

//no se usa el controller

router.get('/',(req,res)=>{
    res.render('register');
})

router.get('/login',(req,res)=>{
    res.render('login');
})

//no hay validacion de existencia

router.get('/profile/:uid', authenticationMiddleware ,async(req,res)=>{
    const {uid} = req.params;
    const user = await userService.getUserById(uid);
    res.render('profile',{user})
})
export default router;