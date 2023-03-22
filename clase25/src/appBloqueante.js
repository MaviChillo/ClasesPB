import express  from "express";
import config from "./config.js";

const app = express()

function sumar(){
    let suma = 0
    for(let i=0;i<5e9;i++){
        suma +=i
    }
    return suma
}

let visitas = 0

app.get('/', (req, res)=>{
    res.send(`El numero de visitas es ${++visitas}`)
})

app.get('/calculo-bloq', (req, res)=>{
    const suma = sumar()
    res.send(`la suma es ${suma}`)
})






const PORT = config.port

app.listen(PORT, ()=>{
    console.log(`escuchando puerto ${PORT}`)
})

