import { Router } from "express";


const router = Router()

router.get('/', (req, res)=>{
    res.render('cookies')
})

router.get('/sessionView', (req, res)=>{
    res.render('sessions')
})

export default router