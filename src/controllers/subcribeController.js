// subcribe controller
import Subscribe from '../models/subscribe.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const subscribe = async (req, res) => {
    const { email } = req.body;
    try {
        const subscribe = await Subscribe.create({ email });
        await subscribe.save();
        // Send email notification to website owner
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER_MAG,
                pass: process.env.GMAIL_PASS_MAG
            }
        });
        const mailOptions = {
            from: email, // set the from field to the email variable
            to: 'fistonalvin@gmail.com',
            subject: 'New Subscriber',
            html: `You have a new subscriber from ${email}`
        };

        await transporter.sendMail(mailOptions);
        res.json({ message: 'Query created successfully' });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error.message
        });
    }
};

export default subscribe;