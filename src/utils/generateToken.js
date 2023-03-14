import jwt from 'jsonwebtoken';
import { secret } from "../config/config.js";

const generateToken = (user) => {
  const token = jwt.sign(
    {
      sub: user._id,
      name: user.name,
      email: user.email,
      password: user.password
    },
    secret,
    { expiresIn: "1h" }
  );
  return token;
}

export default generateToken;
