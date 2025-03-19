import express from 'express';

const router = express.Router();

import PaymentController from '../controllers/payment.controller.js';

router.post('/payments', PaymentController.createPayment);
router.patch('/payments/:id', PaymentController.updatePayment);
router.delete('/payments/:id', PaymentController.deletePayment);
export default router;