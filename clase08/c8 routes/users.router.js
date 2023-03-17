import { Router } from "express"
import { saludar } from "../middlewares/user.js"
import {upload} from "../middlewares/multer.js"


const users = []

// lo mande a la carpeta middlewares:
// funcion con middleware y next
// puedo tener cuantos middleware quiera, segun lo que necesite
// funciones a ejecutar antes de que el servidor cumpla una funcion
// const saludar = (req, res, next)=>{
//     console.log('ejecutando middleware')
//     const user = req.body
//     if(user.name === 'juan'){
//         console.log('no esta autorizado')
//         res.send('no estas autorizado')
//     } else {
//         next()
//     }
// }


// const router = Router()

// //los routers no necesitan el /usuarios porque ya se lo damos en app.get
// // pero si le puedo pasar el :id aca 
// router.get('/', (req, res)=>{
//     res.json({users})
// })

// //entre endpoint y callback se ejecuta el middleware
// router.post('/',  upload.single('file'), saludar ,(req, res)=>{
//     const user = req.body
//     console.log(req.file)
//     console.log(user)
//     users.push(user)
//     res.json({message: 'usuario agregado con exito', user})
// })




// // router.put('/usuarios', (req, res)=>{
// //     res.send('usuarios get')
// // })

// // router.delete('/usuarios', (req, res)=>{
// //     res.send('usuarios get')
// // })



// export default router
