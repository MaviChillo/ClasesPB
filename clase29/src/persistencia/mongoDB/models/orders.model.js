import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
    user:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Users'
    },
    business:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Business'
    },
    products:[
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Products'
        }
    ],
    total:{
        type: Number
    }
})

export const ordersModel = mongoose.model('Orders', ordersSchema)