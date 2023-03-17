import mongoose from "mongoose";

const URI_MONGO = 'mongodb+srv://MaviChillo:mimamamemima1@cluster0.ijd1vjv.mongodb.net/colegio45?retryWrites=true&w=majority'
mongoose.set('strictQuery', true);
try {
    await mongoose.connect(URI_MONGO)
    console.log('conectado a la db')
} catch (error) {
    console.log(error)
}



