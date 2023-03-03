// // clase 10 servidor

// import express  from "express";
// import {Server} from 'socket.io'
// import {dirname} from 'path'
// import { fileURLToPath } from "url";
// import handlebars from 'express-handlebars'

// //__dirname
// const __dirname = dirname(fileURLToPath(import.meta.url))

// const app = express()

// //archivos static en public
// app.use(express.static(__dirname+'/public'))

// //handlebars
// app.engine('handlebars', handlebars.engine())
// app.set('view engine','handlebars')
// app.set('views', __dirname + '/views')

// //ruta
// app.get('/', (req, res)=>{
//     res.render('socket')
// })


// const httpServer = app.listen(8081, ()=>{
//     console.log('escuchando puerto 8081')
// })

// const mensajes = []

// //iniciando socket en el back
// const socketServer = new Server(httpServer)

// socketServer.on('connection', (socket)=>{
//     console.log('usuario conectado', socket.id)
//     socket.on('disconnect',()=>{
//         console.log('usuario desconectado')
//     })

//     socket.emit('saludo', 'Bienvenido a tu primer Websocket')

//     socket.on('mensaje1', (obj)=>{
//         mensajes.push(obj)
//         console.log(mensajes)
//         socketServer.emit('respuesta1', mensajes)
//     })
// })




