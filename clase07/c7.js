// // clase 7 express avanzado

// import express from 'express'
// import UsuarioClass from './c7usuario.js'

// const app = express()
// const usuarioClass = new UsuarioClass('./c7usuario.js')
// // usar siempre en nuestro servidor estas dos lineas de codigo por default
// app.use(express.json())
// app.use(express.urlencoded({extended: true}))


// //rutas 

// app.get('/usuarios', async(req, res)=>{
//     try {
//         const usuarios = await usuarioClass.buscarUsuarios()
//         res.json({usuarios})
//     } catch (error) {
//         res.send(error)
//     }
// })

// app.get('/usuarios/:idUsuario', async (req, res)=>{
//     const {idUsuario} = req.params
//     try {
//         const usuario = await usuarioClass.buscarUsuariosPorId(parseInt(idUsuario))
//         if(usuario){
//             res.status(200).json({message: 'usuario encontrado con exito', usuario})
//         }else{
//             res.status(400).json({message: 'no existe usuario con ese id'})
//         }
//     } catch (error) {
//         res.send(error)
//     }
// })

// app.post('/usuarios', async(req, res)=>{
//     const obj = req.body
//     const usuario = await usuarioClass.crearUsuario(obj)
//     res.json({message: 'usuario creado con exito', usuario})
// })

// app.put('/usuario/:idUsuario', async(req, res)=>{
//     const {idUsuario} = req.params
//     const obj = req.body
//     const usuario = await usuarioClass.modificarUsuario(parseInt(idUsuario), obj)
//     res,json({message: 'usuario actualizado con exito', usuario})
// })


// app.delete('/usuarios:idUsuario', async (req, res)=>{
//     const {idUsuario} =req.params
//     const usuario = await usuarioClass.eliminarUsuario(parseInt(idUsuario))
//     res.json({message : 'usuario eliminado con exito', usuario})
// })



// app.listen(8081, ()=>{
//     console.log('escuchando puerto 8081')
// })



















































































































































































































