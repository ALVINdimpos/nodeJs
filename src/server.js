// server
import app from './app.js';
import { port, database } from "./config/config.js";
import mongoose from 'mongoose';
// Connect to the database
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(database);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
//Connect to the database before listening
connectDB().then(() => {
    app.listen(port, () => {
        console.log("listening for requests");
    })
})
