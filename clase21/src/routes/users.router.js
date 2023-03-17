import { Router } from 'express'
import passport from 'passport'
import {usersModel} from '../persistencia/models/users.model.js'
import { hashPassword, comparePasswords } from '../utils.js'
const router = Router()

// Mongo

//registro sin passport
// router.post('/registro', async(req, res) => {
//   const {email,password} = req.body
//   const existeUsuario = await usersModel.find({email})//sin pass por el hash
//   console.log(existeUsuario);
//   if (existeUsuario.length!==0) {
//     res.redirect('/views/errorRegistro')
//   } else {
//     //hasheado
//     const hashNewPassword = await hashPassword(password)
//     const newUser = {...req.body, password:hashNewPassword}
//     //guardado del hash
//     await usersModel.create(newUser)
//     res.redirect('/views/login')
//   }
// })

//registro con passport

router.post('/registro', passport.authenticate('registro', {
  failureRedirect: '/views/errorRegistro',
  // successRedirect: '/views/perfil', //asi o...
  passReqToCallback: true
}, (req, res)=>{
  res.redirect('/views/perfil') //...asi
}))


router.post('/login', async(req, res) => {
  const { email, password } = req.body
  const usuario = await usersModel.find({email})//sin pass por el hash
  if (usuario.length!==0) {
    //comparar passwords
    const isPass = await comparePasswords(password, usuario[0].password)
    if(isPass){
      for (const key in req.body) {
      req.session[key] = req.body[key]
    }
    req.session.logged = true
    // if(email === 'adminCoder' && password === 'adminCod'){
    //   req.session.isAdmin = true
    // } else {
    //   req.session.isAdmin = false
    // }
    res.redirect('/views/perfil')
    }else{
      res.redirect('/views/errorLogin')
    }
  }else{
    res.redirect('/views/errorLogin')
  }
})

router.put('/changePassword', async(req,res)=>{
  const {email, oldPassword, newPassword} = req.body
  const usuario = await usersModel.find({email})//sin pass por el hash
  if (usuario.length!==0) {
    //comparar passwords
    const isPass = await comparePasswords(oldPassword, usuario[0].password)
    if(isPass){
      const user = usuario[0]
      user.password = await hashPassword(newPassword)
      await user.save()
      res.send('contraseña actualizada')
    }
  }
  res.send('Hubo un error')
})

router.get('/logout',(req,res)=>{
  req.session.destroy((error)=>{
    if(error)console.log(error);
    else res.redirect('/views/login')
  })
})

//registro Github

router.get('/registroGithub', passport.authenticate('githubRegistro', { scope: [ 'user:email' ] }))

router.get('/github', passport.authenticate('githubRegistro', {failureRedirect: '/views/errorRegistro'}), async(req, res)=>{
  req.session.email = req.user.email
  res.redirect('/views/perfil')
})

//login Github

router.get('/loginGithub', passport.authenticate('githubLogin', { scope: [ 'user:email' ] }))

router.get('/github', passport.authenticate('githubRegistro', {failureRedirect: '/views/errorRegistro'}), async(req, res)=>{
  req.session.email = req.user.email
  res.redirect('/views/perfil')
})


export default router



//contraseña vieja de afofo
// $2b$10$MO9g5xqQ0zAwrwZY0ffSa.4ZEfrB6qS6B5Md6rFKxnklaeukd.jy.

//contraseña nueva de afofo
// $2b$10$0n9FKN/t.RMNeSriGjT8oOMgx9LlD0rA4UKlaWjE2/bNgKHSsaAGO