import {getAll, createOne} from '../services/users.service.js'

export async function findAllUsers(req, res){
    try {
        const users = await getAll()
        if(users.length===0){
            res.status(200).json({message: 'no users'})
        }else{
            res.status(200).json({message: 'users found', users})
        }
    } catch (error) {
        res.status(500).json({error})
    }
}


export async function createOneUser(req, res){
    const {first_name, last_name, email, password} = req.body
    if(!first_name || !last_name || !email || !password){
        res.status(400).json({error: 'data missing'})
    }
    try {
        const newUser = await createOne(req.body)
        res.status(200).json({message: 'user created successfully', user: newUser})
    } catch (error) {
        res.status(500).json({error})
    }
}