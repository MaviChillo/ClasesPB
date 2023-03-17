import mongoose from "mongoose";

const cursosSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 
    description:{
        type: String,
        required: true
    }, 
    teacher:{
        type: mongoose.SchemaTypes.ObjectId, ref: 'Users'
    }, 
    students:{
        type: [
            {type: mongoose.SchemaTypes.ObjectId, ref: 'Users'}
        ]
    }
})

//populate en el find sin ponerlo en el manager
// cursosSchema.pre('find', function(next){
//     this.populate('users')
//     next()
// })

export const cursosModel = mongoose.model('Cursos', cursosSchema)