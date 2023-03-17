import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    }, 
    lastName:{
        type: String,
        required: true
    }, 
    email:{
        type: String,
        required: true,
        unique: true
    }, 
    dni:{
        type: Number
    }, 
    password:{
        type: String, 
        required: true
    }, 
    role:{
        type: String
    }, 
    cursos:{
        type: [
            {type: mongoose.SchemaTypes.ObjectId, ref: 'Cursos'}
        ]
    }
})

export const usersModel = mongoose.model('Users', usersSchema)