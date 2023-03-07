import nodemailer from 'nodemailer';
import Email from '../models/querries';
const Joi = require('joi');

const sendEmail = async (req, res) => {
  try {
    const {subject, message } = req.body;

    // Validate request body
    const schema = Joi.object({
      subject: Joi.string().required(),
      message: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // Create new email object
    const email = new Email({
      subject,
      message,
    });
    await email.save();

    // Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        method: "none" 
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_USER,
      subject,
      text: message,
    };
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export default { sendEmail };
