import { Router } from "express";
import fs from 'fs'



const router = Router()
const path = 'usuarios.json'

router.get('/', async(req, res)=>{
    let usuarios = []
    if(fs.existsSync(path)){
        const usuariosJSON = await fs.promises.readFile(path, 'utf-8')
        usuarios = JSON.parse(usuariosJSON)
    }
    res.render('listaUsuarios', {usuarios})
})

export default router