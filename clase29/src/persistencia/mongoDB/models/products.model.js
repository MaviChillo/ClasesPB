import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})

export const productsModel = mongoose.model('Business', productsSchema)