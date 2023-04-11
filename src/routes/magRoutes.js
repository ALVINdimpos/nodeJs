import express from 'express';
import {createQuery} from '../controllers/magController.js';

const router = express.Router();
// Create a new query
router.post('/magquerry/create', createQuery);


export default router;
