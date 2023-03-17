import mongoose from "mongoose";

const cursosSchema = new mongoose.Schema({
    nombre:{
        type: String,
        index: true
    },
    users:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Users',
            default:[]
        }
    ]
})

//populate en el find sin ponerlo en el manager
cursosSchema.pre('find', function(next){
    this.populate('users')
    next()
})


export const cursosModel = mongoose.model('Cursos', cursosSchema)