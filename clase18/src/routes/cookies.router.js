import { Router } from "express";

const router = Router()

router.get('/agregar',(req, res)=>{
    //nombre, valor, obj(maxAge o signed)
    res.cookie('primeraCookie', 'primer valor').send('Cookie agregada con exito')
})

router.get('/agregarFirmada',(req, res)=>{
    //nombre, valor, obj(vida maxima)
    res.cookie('segundaCookie', 'segundo valor', {signed: true}).send('Cookie agregada con exito')
})

router.get('/listar', (req, res)=>{
    const {primeraCookie} = req.cookies
    const {segundaCookie} = req.signedCookies
    res.json({cookie: {primeraCookie, segundaCookie}})
})

router.get('/eliminar', (req, res)=>{
    res.clearCookie('primeraCookie').send('Cookie eliminada con exito')
})

router.post('/actividad', (req, res)=>{
    const {nombreCliente, emailCliente} = req.body
    res.cookie(nombreCliente, emailCliente, {maxAge: 10000}).send('Cookie agregada con exito')
})



export default router