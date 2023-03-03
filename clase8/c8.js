// // clase 8 router y multer
// // c8.js = app.js

// import express from "express";
// import usersRouter from './c8 routes/users.router.js'
// import petsRouter from './c8 routes/pets.router.js'
// import __dirname from './utils.js'

// // // dirName
// // //cuando trabajo con type: modules necesito esto 
// // import {dirname} from 'path'
// // import { fileURLToPath } from "url";
// // // y esto
// // const __dirname = dirname(fileURLToPath(import.meta.url))
// // console.log(__dirname)


// const app = express()

// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// //middleware incorporado y a nivel aplicacion
// app.use(express.static(__dirname + '/public')) //poner el dirname y la carpeta 
// //middleware a nivel aplicacion


// // ya tiene el slash, entonces en el router no los necesita
// // middleware a nivel de endpoint
// app.use('/api/users', usersRouter)
// app.use('/api/pets', petsRouter)//puedo agregar el saludar entre la ruta y el router

// app.get('/', (req, res)=>{
//     res.send('ruta raiz')
// })


// const PORT = 8080

// app.listen(PORT, ()=>{
//     console.log(`escuchando el puerto ${PORT}`)
// })



























































































