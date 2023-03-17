import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
    },
    lastName:{
        type:String,
        required: true,
    },
    username:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type:String,
        required:true
    }

})
// PUBLICO - ADMINISTRADOR 
export const userModel = mongoose.model('Users',userSchema)