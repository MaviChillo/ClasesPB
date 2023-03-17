// clase14 
// npm i mongoose

import  express  from "express";
import { dbConnect } from "./db/dsConfig.js";
import estudiantesRouter from './routes/estudiantes.router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/estudiantes', estudiantesRouter)

const PORT = 8081

try {
    await dbConnect()
    console.log('conectado a la db')
    app.listen(PORT, ()=>{
    console.log(`escuchando al puerto ${PORT}`)
})
} catch (error) {
    console.log('error conexion db ')
}





