import dotenv from "dotenv";
import crypto from "crypto";
dotenv.config();

export const port = process.env.PORT;
export const database = process.env.MONGODB_URI;
export const secret = process.env.JWT_SECRET || crypto.randomBytes(32).toString("hex"); 
