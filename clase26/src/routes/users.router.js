import { Router } from "express";
import { findAllUsers , createOneUser } from "../controllers/users.controller.js";

const router = Router()

router.get('/', findAllUsers)
router.post('/', createOneUser)



export default router