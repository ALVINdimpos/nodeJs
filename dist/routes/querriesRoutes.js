"use strict";

var express = require('express');
var queriesController = require('../controllers/querriesController');
var router = express.Router();

// Retrieve all queries
router.get('/queries', queriesController.getAllQueries);

// Create a new query
router.post('/queries/create', queriesController.createQuery);

// Update an existing query
router.put('/queries/update/:id', queriesController.updateQuery);

// Delete a query
router["delete"]('/queries/delete/:id', queriesController.deleteQuery);
module.exports = router;