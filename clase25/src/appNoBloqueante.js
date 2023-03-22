import express  from "express";
import config from "./config.js";
import {fork} from 'child_process'

const app = express()

let visitas = 0

app.get('/', (req, res)=>{
    res.send(`El numero de visitas es ${++visitas}`)
})

app.get('/calculo-bloq', (req, res)=>{
    const childProcess = fork('./child.js')
    childProcess.send('start')//message
    childProcess.on('message',(suma)=>{
        res.send(`la suma es ${suma}`)
    })
})


const PORT = config.port

app.listen(PORT, ()=>{
    console.log(`escuchando puerto ${PORT}`)
})

