import express from 'express';
const router = express.Router();
import { body, validationResult } from "express-validator";
import {getUsers,createUser,getUserById,updateUserById,deleteUserById} from "../controllers/userController.js";
// GET /api/users - Get all users
router.get("/users", getUsers);

// POST /api/users - Create a new user
router.post(
  "/signup",
  body("email").isEmail().withMessage("Invalid email format"),
  body("password")
    .isLength({ min: 3 })
    .withMessage("Password must be at least 3 characters long"),
    body("confirmpassword")
    .isLength({ min: 3 })
    .withMessage("Password must be at least 3 characters long"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  createUser
);

// GET /api/users/:id - Get a user by ID
router.get("/user/:id", getUserById);

// PUT /api/users/:id - Update a user by ID
router.put("/user/update/:id", updateUserById);

// DELETE /api/users/:id - Delete a user by ID
router.delete("/user/delete/:id", deleteUserById);

export default router;
