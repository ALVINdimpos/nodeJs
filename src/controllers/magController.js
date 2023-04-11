import { queriesModel } from "../models/querries.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const magController = {};

// Create a new query
export const createQuery = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    const query = new queriesModel({ name, email, message });
    await query.save();
    // Send email notification to website owner
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
    
    const mailOptions = {
      from: email, // set the from field to the email variable
      to: "fistonalvin@gmail.com",
      subject: "New Query",
      html: `You have a new query from ${name} (${email}): ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "Query created successfully" });
  } catch (error) {
    next(error);
  }
};

export default magController;
