import express from "express";
import handlebars  from "express-handlebars";
import { __dirname } from "./utils.js";
import viewsRouter from './routes/views.router.js'
// cookies
import cookieParser from "cookie-parser";
import cookiesRouter from "./routes/cookies.router.js"
//session
import session from "express-session";
import sessionsRouter from './routes/sessions.router.js'


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//coockies dep
app.use(cookieParser('secretCookie'))
//session
app.use(session({
    secret: 'secretSession',
    resave: true,
    saveUninitialized:true
}))


//routes
app.use('/cookies', cookiesRouter)
app.use('/sessions', sessionsRouter)
app.use('/', viewsRouter)

//motor de plantilla
app.engine('handlebars', handlebars.engine())
app.set('view engine','handlebars')
app.set('views', __dirname + '/views')


app.listen(8085, ()=>{
    console.log('escuchando puerto 8085')
})