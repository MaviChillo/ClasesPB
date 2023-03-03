import { Router } from "express";
import { usersModel } from "../models/users.model.js";
import fs from 'fs'
import { __dirname } from "../../utils.js";

const router = new Router()

router.get('/create', async(req, res)=>{
    try {
        const read = await fs.promises.readFile(__dirname + '/users.json', 'utf-8')
        const users = JSON.parse(read)
        await usersModel.create(users)
        res.json({message: 'info guardada con éxito'})
    } catch (error) {
        console.log(error)
    }
})


router.get('/time', async(req,res)=>{
    // const response = await usersModel.findById({_id: '63e5797570e6bade23ba40fa'}).explain('executionStats')
    const response = await usersModel.find({first_name: 'maria'}).explain('executionStats')
    res.json({response})
})



export default router