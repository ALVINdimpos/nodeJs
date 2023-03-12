const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const userRoutes = require("./routes/userRoutes");
const commentRoutes = require("./routes/commentRoutes");
const querriesRoutes =require('./routes/querriesRoutes');

const { port, database } = require("./config/config");
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

// Set up Swagger
const swaggerDefinition = require('./swagger');

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

module.exports = server;

