import mongoose from "mongoose";

const estudiantesSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        maxLength: 50
    }, 
    apellido:{
        type: String,
        required: true
    },
    edad:{
        type: Number,
        required: true
    },
    dni:{
        type: String,
        required: true,
        unique: true
    },
    curso:{
        type: String,
        required: true
    },
    nota:{
        type: Number,
        required: true,
        maxLength: 50
    }
})

export const estudiantesModel = mongoose.model('Estudiantes', estudiantesSchema)







