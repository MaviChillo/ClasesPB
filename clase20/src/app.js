import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import usersRouter from './routes/users.router.js'
import './persistencia/dbConfig.js'

//passport
import passport from 'passport'
import './passport/localPassport.js'







const app = express()

// file session
import FileStore from 'session-file-store'
const fileStore = FileStore(session)

// mongo session
import mongoStore from 'connect-mongo'



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// handlebars
app.engine('handlebars',handlebars.engine())
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')


// session Mongo
app.use(
  session({
    store: new mongoStore({
      mongoUrl:'mongodb+srv://MaviChillo:mimamamemima1@cluster0.ijd1vjv.mongodb.net/mongoSession?retryWrites=true&w=majority'
    }),
    resave: false,
    saveUninitialized: false,
    secret: 'sessionKey',
    cookie:{maxAge:60000}
  })
  )
  
  //trabajar con passport
  //inicializar
  app.use(passport.initialize())
  //passport va a guardar la info de session
  app.use(passport.session())


  // routes
  app.use('/views',viewsRouter)
  app.use('/users',usersRouter)
  app.get('/',(req,res)=>{
    res.redirect('/views/login')
  })


const PORT = 3000

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
