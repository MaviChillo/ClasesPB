import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import usersRouter from './routes/users.router.js'
import './persistencia/dbConfig.js'
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


// session File
// app.use(
//   session({
//     store: new fileStore({
//       path: __dirname + '/sessions',
//     }),
//     resave: false,
//     saveUninitialized: false,
//     secret: 'sessionKey',
//     cookie:{maxAge:60000}
//   })
//   )

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
  
  // routes
  app.use('/views',viewsRouter)
  app.use('/users',usersRouter)
  app.get('/',(req,res)=>{
    res.redirect('/views/login')
  })

  // RUTA SESSION
// app.post('/session',(req,res)=>{
//     //console.log(req.body) // username - password
//     const {username,password} = req.body
//     req.session.username = username
//     req.session.password = password
//     res.json({message:'Sesion iniciada con exito'})
// })

// app.get('/logout',(req,res)=>{
//     req.session.destroy((error)=>{
//         if(error)console.log(error);
//         else console.log('Sesion finalizada');
//     })
// })






const PORT = 3000

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
