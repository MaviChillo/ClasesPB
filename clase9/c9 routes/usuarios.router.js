import { Router } from "express";
import fs from 'fs'


const router = Router()
const path = 'usuarios.json'

router.post('/', async (req, res)=>{
    const usuario = req.body
    let usuarios = []
    if(fs.existsSync(path)){
        const usuariosJSON = await fs.promises.readFile(path, 'utf-8')
        usuarios = JSON.parse(usuariosJSON)
    }
    usuarios.push(usuario)
    await fs.promises.writeFile(path, JSON.stringify(usuarios))
    res.redirect('/views')

})

export default router