import express from "express";
import handlebars from "express-handlebars";
import config from './config.js'
import { __dirname } from "./utils.js";
import viewsRouter from './routes/views.router.js'
import messagesRouter from './routes/messages.router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

//routes
app.use('/views', viewsRouter)
app.use('/messages', messagesRouter)

const PORT = config.port

app.listen(PORT, ()=>{
    console.log(`escuchando puerto ${PORT}`)
})