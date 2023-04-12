import mongoose from "mongoose";
import config from '../../config.js'

const URI = config.mongo_uri
mongoose.set('strictQuery', true);
try {
    await mongoose.connect(URI)
    console.log('conectado a la db');
} catch (error) {
    console.log(error)
}