
const express = require("express");
const router = express.Router();
const db = require("../config/db");
const nodemailer = require("nodemailer");

router.post("/", async (req,res) => {
    const { first_name, last_name, email, phone, message } = req.body;

    try {
        // insert into mysql
        const [result] = await db.execute(
            `INSERT INTO contact_data
            (first_name, last_name, email, phone, message)
            VALUE (?, ?, ?, ?)`,
            [first_name, last_name, email, phone, message]
        );

        //send email to admin
        const transporter = nodemailer.createTransport({
            service: "stratenergy.co.uk", // state our email provider
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from:`"Stratenergy website contact" <${process.env.EMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL,
            subject: "👋Lead Generated from Stratenergy Website",
            html:`
                <h3>New Contact Form Submission</h3>
                <p><strong>First Name:</strong> ${first_name}</p>
                <p><strong>Last Name:</strong> ${last_name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>message:</strong> ${message}</p>
            `,
        });

        res.status(200).json({ message: "Message received and email sent ❤️!" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server error. Please try again later. ❤️" });
    }

});

module.exports = router;