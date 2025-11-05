import { Router } from "express";
import { MakePayment } from '../controllers/payment.controller'

const router = Router();

router.post('/processPayment', MakePayment);

export default router;