import { Router } from "express";
import { usersModel } from "../persistencia/models/users.model.js";

const router = new Router()

const users = [
    {
        nombre: 'juan',
        apellido: 'hoyos',
        email: 'jhoyos@gmail.com',
        dni: 12345678, 
        genero: "m",
        calificacion: 8,
        grupo: "1A"
    },
    {
        nombre: 'franco',
        apellido: 'cabello',
        email: 'fcabello@gmail.com',
        dni: 12345678, 
        genero: "m",
        calificacion: 6,
        grupo: "1B"
    },
    {
        nombre: 'mola',
        apellido: 'moya',
        email: 'mmoya@gmail.com',
        dni: 12345678, 
        genero: "f",
        calificacion: 9,
        grupo: "1A"
    },
    {
        nombre: 'fofa',
        apellido: 'papo',
        email: 'fpapo@gmail.com',
        dni: 12345678, 
        genero: "m",
        calificacion: 2,
        grupo: "1B"
    },
    {
        nombre: 'maria',
        apellido: 'lause',
        email: 'mlause@gmail.com',
        dni: 12345678, 
        genero: "f",
        calificacion: 10,
        grupo: "1A"
    },
    {
        nombre: 'lucas',
        apellido: 'chillo',
        email: 'lchillo@gmail.com',
        dni: 12345678, 
        genero: "m",
        calificacion: 10,
        grupo: "1B"
    }
]

router.get('/create', async (req, res)=>{
    await usersModel.create(users)
    res.json({message: 'user created'})
})

router.get('/aggregation', async(req, res)=>{
    const users = await usersModel.aggregate([
        {$match: {genero: "m"}}, //solo de los masculinos saca grupo y promedio
        {$group:{
            _id:"$grupo", //1A y 1B
            promedio:{$avg:"$calificacion"}, //promedio de cada grupo
            cantidad:{$sum:'$calificacion'} // suma de cada grupo
        }},
        {$sort:{cantidad:-1}} //ordenar de mayor a menor 
    ])
    res.json({users})
})

router.get('/pagination', async(req, res)=>{
    const {limit=10, page=1, nombre} = req.query //default 10 y 1
    const usersInfo = await usersModel.paginate({nombre}, {limit, page}) // /pagination/?limit=5&page=5
    // res.json({status:'excitoso', payload:usersInfo.docs, totalPages: usersInfo.totalPages, previousPage: usersInfo.prevPage})
    res.json({usersInfo})
})


export default router