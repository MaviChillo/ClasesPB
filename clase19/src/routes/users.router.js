import { Router } from 'express'
import {usersModel} from '../persistencia/models/users.model.js'
const router = Router()

//const users = []

// Files
// router.post('/registro', (req, res) => {
//   const existeUsuario = users.some((u) => (u.email === req.body.email))
//   if (existeUsuario) {
//     res.redirect('/views/errorRegistro')
//   } else {
//     users.push(req.body)
//     res.redirect('/views/login')
//   }
// })

// router.post('/login', (req, res) => {

//   const { email, password } = req.body
//   const usuario = users.find((u) => (u.email === email))
//   if (usuario && usuario.password === password) {
//     console.log('session',req.session);
//     for (const key in req.body) {
//       req.session[key] = req.body[key]
//     }
//     res.redirect('/views/perfil')
//   } else {
//     res.redirect('/views/errorLogin')
//   }
// })

// router.get('/logout',(req,res)=>{
//   req.session.destroy((error)=>{
//     if(error)console.log(error);
//     else res.redirect('/views/login')
//   })
// })

// Mongo
router.post('/registro', async(req, res) => {
  const {email,password} = req.body
  const existeUsuario = await usersModel.find({email,password})
  console.log(existeUsuario);
  if (existeUsuario.length!==0) {
    res.redirect('/views/errorRegistro')
  } else {
    await usersModel.create(req.body)
    res.redirect('/views/login')
  }
})

router.post('/login', async(req, res) => {

  const { email, password } = req.body
  const usuario = await usersModel.find({email,password})
  if (usuario.length!==0) {
    for (const key in req.body) {
      req.session[key] = req.body[key]
    }
    req.session.logged = true
    if(email === 'adminCoder' && password === 'adminCod'){
      req.session.isAdmin = true
    } else {
      req.session.isAdmin = false
    }
    res.redirect('/views/perfil')
  } else {
    res.redirect('/views/errorLogin')
  }
})

router.get('/logout',(req,res)=>{
  req.session.destroy((error)=>{
    if(error)console.log(error);
    else res.redirect('/views/login')
  })
})
export default router
