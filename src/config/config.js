import dotenv from "dotenv";
dotenv.config();
import crypto from 'crypto';

export const port = process.env.PORT;
export const database = process.env.DATABASE;
export const secret = process.env.SECRET || crypto.randomBytes(32).toString('hex');
