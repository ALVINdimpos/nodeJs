// server
import app from './app.js';
import { port, database } from "./config/config.js";
import mongoose from 'mongoose';
// Connect to the database
mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 60000
}).then(() => {
    console.log("Connected to MongoDB Atlas!");
}).catch((err) => {
    console.error(err);
    process.exit(1);
});
// Start the server
const server = app.listen(port, () => {
    setTimeout(() => {
        console.log(`Server listening on port ${port}`);
    }, 0);
});
