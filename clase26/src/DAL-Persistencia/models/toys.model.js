import mongoose from "mongoose";

const toysSchema = new mongoose.Schema({
    name:{
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    stock:{
        type: Number
    }
})

export const toyModel = mongoose.model('Toys', toysSchema)