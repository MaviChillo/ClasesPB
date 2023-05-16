import { Router } from 'express';

const router = Router();

const users = [];


router.post('/register',(req,res)=>{
    //no hay validacion de user
    const user = req.body;
    console.log(user);
    if(users.length===0) user.id = 1;
    else user.id = users[users.length-1].id+1;
    users.push(user);
    //no se hashea la password
    res.send({status:"success",payload:user})
})

export default router;