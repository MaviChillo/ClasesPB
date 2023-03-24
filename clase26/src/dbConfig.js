import mongoose from "mongoose";
import config from "./config.js";

const URI = config.uri
mongoose.set('strictQuery', true);
try {
    mongoose.connect(URI)
    console.log('conectado a la db')
} catch (error) {
    console.log(error)
}



