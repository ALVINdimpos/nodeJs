import dotenv from "dotenv";
const crypto = require('crypto');
dotenv.config();

export const port = process.env.PORT;
export const database = process.env.DATABASE;
export const secret = crypto.randomBytes(32).toString('hex');