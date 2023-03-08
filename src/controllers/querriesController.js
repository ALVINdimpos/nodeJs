const queriesModel = require('../models/querries');
const nodemailer = require('nodemailer');

const queriesController = {};

// Retrieve all queries
queriesController.getAllQueries = async (req, res, next) => {
  try {
    const queries = await queriesModel.find();
    res.json(queries);
  } catch (error) {
    next(error);
  }
};

// Create a new query
queriesController.createQuery = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    const query = new queriesModel({ name, email, message });
    await query.save();

    // Send email notification to website owner
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });

    const mailOptions = {
      from:`${email}`,
      to: 'fistonalvin@gmail.com',
      subject: 'New Query',
      text: `You have a new query from ${name} (${email}): ${message}`
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: 'Query created successfully' });
  } catch (error) {
    next(error);
  }
};

// Update an existing query
queriesController.updateQuery = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, message } = req.body;
    const query = await queriesModel.findByIdAndUpdate(id, { name, email, message });
    res.json({ message: 'Query updated successfully' });
  } catch (error) {
    next(error);
  }
};

// Delete a query
queriesController.deleteQuery = async (req, res, next) => {
  try {
    const { id } = req.params;
    await queriesModel.findByIdAndDelete(id);
    res.json({ message: 'Query deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = queriesController;
