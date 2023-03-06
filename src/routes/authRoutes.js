const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// POST /api/authenticate - Authenticate a user
router.post("/login", authController.login);

// POST /api/register - Register a new user
// router.post('/register', authController.register);

module.exports = router;
