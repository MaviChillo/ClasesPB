// clase 15 

import  express  from "express";
import {__dirname} from './utils.js'
import  handlebars  from "express-handlebars";
import cursosRouter from './routes/cursos.router.js'
import usersRouter from './routes/users.router.js'
import viewsRouter from './routes/views.router.js'
import './dbConfig.js'
const app = express()
const PORT = 8081

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'))
app.use('/cursos', cursosRouter)
app.use('/users', usersRouter)
app.use('/views', viewsRouter)

//handlebars

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')



app.listen(PORT, ()=>{
    console.log(`escuchando puerto ${PORT}`)
})










