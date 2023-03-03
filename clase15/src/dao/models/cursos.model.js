import mongoose from "mongoose";

const cursosSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 
    description:{
        type: String,
        required: true
    }
})

export const cursosModel = mongoose.model('Cursos', cursosSchema)