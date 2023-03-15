import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT;
export const database = process.env.MONGODB_URI;
export const secret = process.env.JWT_SECRET