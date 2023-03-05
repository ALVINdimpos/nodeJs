// initialize the Express app, load configuration files, connect to the database, define middleware, and register routes.
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan =require('morgan');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const userRoutes = require('./routes/userRoutes');
const commentRoutes = require('./routes/commentRoutes');

const { port, database } = require('./config/config');
const app = express();

// Connect to the database
mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

  // Set up middleware
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
// Define routes
app.use('/api', blogRoutes);
app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api', commentRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

