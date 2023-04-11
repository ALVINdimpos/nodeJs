import express from 'express';
import { subscribe } from '../controllers/subscribeController.js';

const router = express.Router();

// Create a new subscriber
router.post('/subscribe', subscribe);

export default router;