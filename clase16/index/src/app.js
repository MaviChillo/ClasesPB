import  express  from "express";
import  usersRouter  from "./routes/users.router.js";
import './dbConfig.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/users', usersRouter)


app.listen(8082, ()=>{
    console.log('escuchando al puerto 8082')
})