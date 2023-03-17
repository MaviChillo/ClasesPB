import mongoose from "mongoose";

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
        unique: true
    },
    dni:{
        type: Number,
        required: true
    }
})


export const usersModel = mongoose.model('Users', usersSchema)
