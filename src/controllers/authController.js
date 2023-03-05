const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { secret } = require("../config/config");

exports.authenticate = async function (req, res) {
  try {
    // Check if the request includes a username and password
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    // Find the user with the specified username and password
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, secret);

    // Send the token back in the response
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
