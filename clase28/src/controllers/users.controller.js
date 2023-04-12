import {getAll, createOne} from '../services/user.service.js'


export const getAllUsers = async(req,res)=>{
    const users = await getAll()
    res.json({message:'Users', users})
}

export const createUser = async(req, res)=>{
    const objUser = req.body
    const newUser = await createOne(objUser)
    res.json({message: 'user created', newUser})
}