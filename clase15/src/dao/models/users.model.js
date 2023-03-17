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
    }
})

export const usersModel = mongoose.model('Users', usersSchema)