import { Router } from "express";
import { usersModel } from "../persistencia/models/users.model.js";

const router = new Router()

const users = [
    {
        nombre: 'juan',
        apellido: 'hoyos',
        email: 'jhoyos@gmail.com',
        dni: 12345678
    },
    {
        nombre: 'franco',
        apellido: 'cabello',
        email: 'fcabello@gmail.com',
        dni: 12345678
    },
    {
        nombre: 'mola',
        apellido: 'moya',
        email: 'mmoya@gmail.com',
        dni: 12345678
    },
    {
        nombre: 'fofa',
        apellido: 'papo',
        email: 'fpapo@gmail.com',
        dni: 12345678
    },
    {
        nombre: 'maria',
        apellido: 'lause',
        email: 'mlause@gmail.com',
        dni: 12345678
    }
]

router.get('/create', async (req, res)=>{
    await usersModel.create(users)
    res.json({message: 'user created'})
})


export default router