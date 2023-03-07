import express from 'express';
import emailController from '../controllers/querriesController';

const router = express.Router();

router.post('/send-querry', emailController.sendEmail);

export default router;
