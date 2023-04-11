import { magModel } from "../models/Mag.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const magController = {};

// Create a new query
export const createQuery = async (req, res, next) => {
  try {
    const { name, email, message ,tel,subject} = req.body;
    const query = new magModel({ name, email, message });
    await query.save();
    // Send email notification to website owner
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER_MAG,
        pass: process.env.GMAIL_PASS_MAG,
      },
    });
    
    const mailOptions = {
      from: email, // set the from field to the email variable
      to: "fistonalvin@gmail.com",
      subject: `${subject}`,
      html: `Name: ${name} <br> Email: ${email} <br> Tel: ${tel} <br> Message: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "Query created successfully" });
  } catch (error) {
    next(error);
  }
};

export default magController;
