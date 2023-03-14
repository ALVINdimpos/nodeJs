import express from "express";
const router = express.Router();
import { login} from "../controllers/authController.js";


// POST /api/authenticate - Authenticate a user
router.post("/login", login);

// POST /api/register - Register a new user
// router.post('/register', authController.register);

export default router;
