import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT;
export const database = process.env.DATABASE;
export const secret = process.env.JWT_SECRET