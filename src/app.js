import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import querriesRoutes from './routes/querriesRoutes.js';

import { port, database } from "./config/config.js";

const app = express();

// Connect to the database
mongoose
  .connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// Set up middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Define routes
app.use("/api", blogRoutes);
app.use("/api", userRoutes);
app.use("/api", commentRoutes);
app.use("/api", querriesRoutes);
app.use("/api", authRoutes);

 app.get(
  "/",
  (req, res) => {
    res.send("Welcome to the MY BRAND API");
  }
 )
 import { swaggerDefinition } from './swagger.js';

const options = {
  swaggerDefinition,
  apis: ['../routes/*.js'], // Path to the API routes files
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the server
const server = app.listen(port, () => {
  setTimeout(() => {
    console.log(`Server listening on port ${port}`);
  }, 0);
});

export default server;

