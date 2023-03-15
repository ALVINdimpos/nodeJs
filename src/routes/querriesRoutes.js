import express from 'express';
import {getAllQueries,createQuery, updateQuery,deleteQuery} from '../controllers/querriesController.js';

const router = express.Router();

// Retrieve all queries
router.get('/queries', getAllQueries);

// Create a new query
router.post('/querry/create', createQuery);

// Update an existing query
router.put('/queries/update/:id', updateQuery);

// Delete a query
router.delete('/queries/delete/:id',deleteQuery);



export default router;
