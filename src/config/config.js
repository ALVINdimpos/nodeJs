import dotenv from "dotenv";
dotenv.config();
import crypto from 'crypto';

export const PORT = process.env.PORT;
export const MONGODB_URI = process.env.DATABASE;
export const SECRET = process.env.SECRET || crypto.randomBytes(32).toString('hex');
