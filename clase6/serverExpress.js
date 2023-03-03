// import express from "express";

// const productos = [
//     {id: 1, 
//     nombre: 'iphone', 
//     precio: 500, 
//     stock: 50},
//     {id: 2, 
//     nombre: 'ipad', 
//     precio: 400, 
//     stock: 50},
//     {id: 3, 
//     nombre: 'ipod', 
//     precio: 300, 
//     stock: 50},
//     {id: 4, 
//     nombre: 'i tv', 
//     precio: 700, 
//     stock: 50}
// ]

// const app = express()

// const PORT = 8080

// // rutas
// app.get('/bienvenida', (req,res)=>{
//     console.log(req)
//     res.send('<h1 style="color: blue">BIENVENIDO A NUESTRO SERVIDOR</h1>')
// })

// app.get('/usuario', (req,res)=>{
//     res.json({
//         nombre: 'juan', 
//         apellido: 'moras',
//         edad: 38,
//         correo: 'jmoras@gmail.com'
//     })
// })

// //req.params

// app.get('/productos/:idProducto', (req,res)=>{
//     const {idProducto} = req.params
//     console.log(idProducto)
//     const producto = productos.find(p=>p.id === parseInt(idProducto))
//     if(producto){
//         res.json(producto)
//     }else{
//         res.send('producto no encontrado')
//     }
// })

// //req.query

// // app.get('/productos', (req,res)=>{
// //     const {orden, limit} = req.query
// //     console.log(orden, limit)
// // })


// app.listen(PORT, ()=>{
//     console.log(`escuchando el puerto ${PORT}`)
// })














































