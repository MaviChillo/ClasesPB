import { Router } from "express";

const router = Router()

router.post('/', (req, res)=>{
    for (const key in req.body) {
        req.session[key] = req.body[key]
    }
    // console.log(req)
    res.send('Usuario')
})

export default router