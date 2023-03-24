import express from "express";
import config from './config.js'
import './DAL-Persistencia/dbConfig.js'
import './dbConfig.js'


const app = express()


const PORT = config.port

app.listen(PORT, ()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})