const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// POST /api/authenticate - Authenticate a user
router.post("/authenticate", authController.authenticate);

// POST /api/register - Register a new user
// router.post('/register', authController.register);

module.exports = router;
