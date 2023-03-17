import  express  from "express";
import  usersRouter  from "./routes/users.router.js";
import  cursosRouter  from "./routes/cursos.router.js";
import '../src/persistencia/dbConfig.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/users', usersRouter)
app.use('/cursos', cursosRouter)


app.listen(8084, ()=>{
    console.log('escuchando al puerto 8084')
})