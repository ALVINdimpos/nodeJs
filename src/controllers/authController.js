// const User = require('../models/User');
import User from "../models/User.js";
import generateToken from "../utils/generateToken";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user with the given email exists
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // Compare the given password with the hashed password in the database
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // If the email and password are valid, generate a JWT token and send it in the response
    const token = generateToken(user);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
