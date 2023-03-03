import { cursosModel } from "../models/cursos.model.js";

export class CursosManager{

async createCursos(array){
    try {
        const cursos = await cursosModel.create(array)
        return cursos
    } catch (error) {
        console.log(error)
    }
}

async getCurso(cursoId){
    try {
        //en vez de findById un find para que funcione el populate desde el model/schema
        const curso = await cursosModel.find({_id:cursoId})
        return curso
    } catch (error) {
        console.log(error)
    }
}

async addUserToCurso(cursoId, userId){
    try {
        const curso = await cursosModel.findById(cursoId)
        curso.users.push(userId)
        curso.save()
        return curso
    } catch (error) {
        console.log(error)
    }
}


}