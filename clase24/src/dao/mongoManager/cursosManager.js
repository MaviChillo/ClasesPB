import {cursosModel} from '../models/cursos.model.js'

export default class CursosManager {

    async getAll(){
        try {
            const cursos = await cursosModel.find().populate('students').populate('teacher').lean()
            return cursos
        } catch (error) {
            console.log(error)
        }
    }

    async createCurso(objCurso){
        try {
            const newCurso = await cursosModel.create(objCurso)
            return newCurso
        } catch (error) {
            console.log(error)
        }
    }

    async getCursoById(idCurso){
        try {
            const curso = await cursosModel.findOne({_id:idCurso}).populate('students').populate('teacher').lean()
            return curso
        } catch (error) {
            console.log(error)
        }
    }

    async UpdateCurso(idCurso, objCurso){
        try {
            const updateCurso = await cursosModel.updateOne({_id:idCurso}, {$set:objCurso}).populate('students').populate('teacher').lean()
            return updateCurso
        } catch (error) {
            console.log(error)
        }
    }
}