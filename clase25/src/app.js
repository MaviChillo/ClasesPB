import express  from "express";
import config from "./config.js";

const app = express()

const PORT = config.port

app.listen(PORT, ()=>{
    console.log(`escuchando puerto ${PORT}`)
})


