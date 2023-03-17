import { Router } from 'express'
import { userModel } from '../persistencia/models/users.model.js'

const router = Router()

router.get('/:username', (req, res) => {
  res.send('Probando')
})

router.post('/', async (req, res) => {
  const user = await userModel.create(req.body)
  res.json({ message: 'Usuario creado',user })
})

router.put('/:username', (req, res) => {
  res.send('Probando')
})

router.delete('/:username', (req, res) => {
  res.send('Probando')
})

// router.get('*', (req, res) => {
//   res.send('Usuario incorrecto')
// })

router.param('username',async(req,res,next,username)=>{
    const regex = /^[a-zA-Z]+$/
    const isValid = regex.test(username)
    if(isValid)return next()
    res.json({message:'usuario mal escrito'})
})

export default router
