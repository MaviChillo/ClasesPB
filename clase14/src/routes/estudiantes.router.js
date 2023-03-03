import { Router } from "express";
import { estudiantesModel } from "../db/models/estudiantes.model.js";

const router = Router()

//buscar todos
router.get('/', async(req, res)=>{
    try {
        const estudiantes = await estudiantesModel.find({})
    console.log(estudiantes)
    if(estudiantes.length!==0){
        res.json({message: 'todos los estudiantes', estudiantes})
    }else{
        res.send('no hay estudiantes en la db')
    }
    // res.send('buscar todos')
    } catch (error) {
        console.log(error)
    }
})

//buscar por id
router.get('/:idEstudiante', async(req, res)=>{
    try {
        const {idEstudiante} = req.params
    const estudiante = await estudiantesModel.findById(idEstudiante)
    // console.log(estudiantes)
    if(estudiante){
        res.json({message: 'el estudiante', estudiante})
    }else{
        res.send('no hay estudiante con ese id')
    }
    // res.send('buscar todos')
    } catch (error) {
        console.log(error)
    }
})

//agregar estudiante
router.post('/', async(req, res)=>{
    try {
        const estudianteObj = req.body
    const newEstudiante = await estudiantesModel.create(estudianteObj)
    console.log(newEstudiante)
    res.json({message: 'estudiante agregado con exito', estudiante: newEstudiante})
    // res.send('estudiante creado')
    } catch (error) {
        console.log(error)
    }
})

//modificar estudiante
router.put('/:idEstudiante', async(req, res)=>{
    const {idEstudiante} = req.params
    const estudianteObj = req.body
    try {
        const estudianteActualizado = await estudiantesModel.findByIdAndUpdate(idEstudiante, estudianteObj, {new:true})
        res.json({message: 'estudiante modificado con exito', estudiante:estudianteActualizado})
    } catch (error) {
        console.log(error)
    }
})


//eliminar estudiante
router.delete('/:idEstudiante', async(req, res)=>{
const {idEstudiante} = req.params
const estudianteDelete = await estudiantesModel.findByIdAndDelete(idEstudiante)
res.json({message: 'estudiante eliminado con exito', estudiante: estudianteDelete})
})

export default router