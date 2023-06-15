import {Router} from 'express'
import {createPayment} from '../controllers/payments.controllers.js'

const router = Router();

router.post('/payment-intents', createPayment);

export default router;