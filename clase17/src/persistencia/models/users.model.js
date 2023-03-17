import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const usersSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    email:{
        type:String,
        //unique: true
    },
    dni:{
        type: Number,
        required: true
    },
    genero:{
        type: String,
        required: true
    },
    calificacion:{
        type: Number,
        required: true
    },
    grupo:{
        type: String,
        required: true
    }
})

usersSchema.plugin(mongoosePaginate)

export const usersModel = mongoose.model('Users', usersSchema)
