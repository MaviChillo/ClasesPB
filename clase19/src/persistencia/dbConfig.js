import mongoose from "mongoose";

mongoose.connect('mongodb+srv://MaviChillo:mimamamemima1@cluster0.ijd1vjv.mongodb.net/mongoSession?retryWrites=true&w=majority',(error)=>{
    if(error)console.log(error);
    else console.log('Conectado a la base de datos');
})