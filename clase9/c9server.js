// import express from 'express'
// import handlebars from 'express-handlebars'
// import viewsRouter from './c9 routes/views.router.js'
// import usuariosRouter from './c9 routes/usuarios.router.js'

// //dirname
// import {dirname} from 'path'
// import { fileURLToPath } from 'url'

// const __dirname = dirname(fileURLToPath(import.meta.url))

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.use(express.static(__dirname+'/public'))


// //config handlebars
// //iniciar motor de plantilla 'handlebars' antes de los app.set
// app.engine('handlebars', handlebars.engine())
// //settings para utilizar motor de plantilla 'handlebars'
// app.set('view engine', 'handlebars')
// app.set('views', __dirname + '/views')

// //routes
// app.use('/views', viewsRouter)
// app.use('/usuarios', usuariosRouter)



// //usuarios
// // const usuarios = [
// //     {
// //     nombre: 'maria', 
// //     apellido: 'chillo', 
// //     edad: 22, 
// //     correo: 'mavi.chillo@gmail.com', 
// //     telefono: 1150476426
// //     },
// //     {
// //     nombre: 'lucas', 
// //     apellido: 'lause', 
// //     edad: 23, 
// //     correo: 'lukedemons@gmail.com', 
// //     telefono: 114787848734
// //     },
// //     {
// //     nombre: 'juan', 
// //     apellido: 'mariota', 
// //     edad: 45, 
// //     correo: 'jmariota@gmail.com', 
// //     telefono: 11374738734
// //     },
// //     {
// //     nombre: 'julieta', 
// //     apellido: 'venegas', 
// //     edad: 67, 
// //     correo: 'jvenegas@gmail.com', 
// //     telefono: 113773783
// //     },
// //     {
// //     nombre: 'moritzio', 
// //     apellido: 'muvit', 
// //     edad: 456, 
// //     correo: 'movitmuvit@gmail.com', 
// //     telefono: 11346346346
// //     },
// // ]

// // app.get('/', (req, res)=>{
// //     const index = Math.floor(Math.random()*5)
// //     const usuario = usuarios[index]
// //     res.render('vista1', {usuario, titulo: 'Usuario Random'})
// // })

// // app.get('/usuarios', (req, res)=>{
// //     res.render('listaUsuarios', {usuarios, titulo: 'Usuarios'})
// // })



// app.listen(8082, ()=>{
//     console.log('escuchando al puerto 8082')
// })