import mongoose from 'mongoose'

const URL = 'mongodb+srv://MaviChillo:mimamamemima1@cluster0.ijd1vjv.mongodb.net/colegio?retryWrites=true&w=majority'

mongoose.set('strictQuery', true);

export async function dbConnect (){
    mongoose.connect(URL)
}