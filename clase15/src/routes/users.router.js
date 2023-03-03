import { Router } from "express";
import UsersManager from '../dao/mongoManager/usersManager.js'
// import UsersManager from '../dao/filaleManager/usersManager.js'

const usersManager = new UsersManager()

const router = Router()

router.get('/', async(req, res)=>{
    const users = await usersManager.getAll()
    if(!users){
        res.json({message: 'Error'})
    }else{
        res.json({message: 'Success', users})
    }
})

router.post('/', async(req, res)=>{
    const {firstName, lastName, email, dni} = req.body
    if(!firstName || !lastName || !email || !dni){
        res.json({message: 'values required'})
    }else{
        const newUser = await usersManager.createUser({firstName, lastName, email, dni})
        if(!newUser){
            res.json({message: 'Error'})
        }else{
            res.json({message: 'Success', newUser})
        }
    }
})

export default router