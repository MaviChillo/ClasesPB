import express  from "express";
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/', (req, res)=>[
    res.json({message: 'solucionando CORS'})
])

app.listen(3000, ()=>{
    console.log('escuchando puerto 3000')
})