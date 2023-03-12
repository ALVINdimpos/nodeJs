"use strict";

var express = require("express");
var router = express.Router();
var _require = require("express-validator"),
  body = _require.body,
  validationResult = _require.validationResult;
var userController = require("../controllers/userController");

// GET /api/users - Get all users
router.get("/users", userController.getUsers);

// POST /api/users - Create a new user
router.post("/signup", body("email").isEmail().withMessage("Invalid email format"), body("password").isLength({
  min: 3
}).withMessage("Password must be at least 3 characters long"), body("confirmpassword").isLength({
  min: 3
}).withMessage("Password must be at least 3 characters long"), function (req, res, next) {
  var errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }
  next();
}, userController.createUser);

// GET /api/users/:id - Get a user by ID
router.get("/user/:id", userController.getUserById);

// PUT /api/users/:id - Update a user by ID
router.put("/user/update/:id", userController.updateUserById);

// DELETE /api/users/:id - Delete a user by ID
router["delete"]("/user/delete/:id", userController.deleteUserById);
module.exports = router;