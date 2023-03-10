"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _querriesRoutes = _interopRequireDefault(require("./routes/querriesRoutes"));
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var morgan = require("morgan");
var swaggerJSDoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express');
var authRoutes = require("./routes/authRoutes");
var blogRoutes = require("./routes/blogRoutes");
var userRoutes = require("./routes/userRoutes");
var commentRoutes = require("./routes/commentRoutes");
var _require = require("./config/config"),
  port = _require.port,
  database = _require.database;
var app = express();

// Connect to the database
mongoose.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("MongoDB connected successfully");
})["catch"](function (err) {
  console.error(err);
  process.exit(1);
});

// Set up middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Define routes
app.use("/api", blogRoutes);
app.use("/api", userRoutes);
app.use("/api", commentRoutes);
app.use("/api", _querriesRoutes["default"]);
app.use("/api", authRoutes);

// Set up Swagger
var swaggerDefinition = require('./swagger.json');
var options = {
  swaggerDefinition: swaggerDefinition,
  apis: ['../routes/*.js'] // Path to the API routes files
};

var swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the server
app.listen(port, function () {
  console.log("Server listening on port ".concat(port));
});