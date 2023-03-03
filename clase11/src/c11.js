// clase 11

import express from 'express'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))


// motor de plantillas
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views')


// ruta raiz
app.get('/', (req, res)=>{
    res.render('socket')
})


// socket

const mensajes = []

const httpServer = app.listen(3000, ()=>{
    console.log('escuchando puerto 3000')
})

const socketServer = new Server(httpServer)

socketServer.on('connection', (socket)=>{
    console.log(`Usuario conectado: ${socket.id}`)

    socket.on('disconnect', ()=>{
        console.log(`Usuario desconectado`)
    })

    socket.on('mensaje', info=>{
        mensajes.push(info)
        socketServer.emit('chat', mensajes)
        console.log(info)
    })

    socket.on('nuevoUsuario', usuario=>{
        socket.broadcast.emit('broadcast', usuario)
    })
})




















