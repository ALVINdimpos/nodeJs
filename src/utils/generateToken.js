const jwt = require("jsonwebtoken");
import {secret } from "../config/config";
function generateToken(user) {
  const token = jwt.sign(
    {
      sub: user._id,
      name: user.name,
      email: user.email,
      password:user.password
    },
   secret,
    { expiresIn: "1h" }
  );
  return token;
}

module.exports = generateToken;
