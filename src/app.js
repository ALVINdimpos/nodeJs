import express from "express";
import cors from 'cors';
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
import { swaggerDefinition } from './swagger.js';

const app = express();

// Enable CORS
app.use(cors());
mongoose.set('strictQuery', false);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
// Set up middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Define routes
app.use("/api", authRoutes);
app.use("/api", blogRoutes);
app.use("/api", userRoutes);
app.use("/api", commentRoutes);
app.use("/api", querriesRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the MY BRAND APIs");
});

const options = {
    swaggerDefinition,
    apis: ['../routes/*.js'], // Path to the API routes files
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;