import { Router } from "express";
import { cursosModel } from "../persistencia/models/cursos.model.js";
import { CursosManager } from "../persistencia/dao/cursosManager.js";

const cursosManager = new CursosManager()
const router = new Router()

const cursos = [
    {
        nombre: 'JavaScript'
    },
    {
        nombre: 'Back-End'
    },
    {
        nombre: 'SQL'
    },
    {
        nombre: 'AWS'
    },
    {
        nombre: 'Front-End'
    }
]

router.get('/create', async (req, res)=>{
    const cursos = await cursosManager.createCursos(cursos)
    res.json({message: 'cursos created', cursos})
})

router.post('/addUsers', async(req, res)=>{
    const {cursoId, userId} = req.body
    const curso = await cursosManager.addUserToCurso(cursoId, userId)
    res.json({message: 'user added successfully', curso})
})

router.get('/:cursoId', async (req, res)=>{
    const {cursoId} = req.params
    const curso = await cursosManager.getCurso(cursoId)
    res.json({curso})
})


export default router