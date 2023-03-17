import {cursosModel} from '../models/cursos.model.js'

export default class CursosManager {

    async getAll(){
        try {
            const cursos = await cursosModel.find()
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
}