import { Router } from "express";
import { middleware1 } from '../middlewares/middleware1.js'
import usersController from "../controllers/users.controller.js";

const router = Router()

// router.get('/', middleware1, async(req,res)=>{
// })

router.get('/', middleware1, usersController.findUser())


export default router