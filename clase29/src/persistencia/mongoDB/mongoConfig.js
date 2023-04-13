import mongoose from "mongoose";
import config from '../../config.js'

const URI = config.mongo_uri

mongoose.connect(URI)
.then(()=>console.log('conectado a la db'))
.catch((error)=>console.log(error))