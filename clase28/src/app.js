import express from "express";
import usersRouter from './routes/user.router.js'
import './persistencia/modngoDb/configMongo.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/users', usersRouter)


app.listen(3000, ()=>{
    console.log('escuchando puerto 3000')
})