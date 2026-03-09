const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Lead" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "🚀 New Website Contact Request",
      html: `
    <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
      
      <div style="max-width:600px;margin:auto;background:white;border-radius:10px;padding:25px;border:1px solid #eee;">
        
        <h2 style="margin-top:0;color:#4f46e5;">New Contact Request</h2>
        <p style="color:#555;">Someone filled out the contact form on your website.</p>

        <table style="width:100%;border-collapse:collapse;margin-top:20px;">
          
          <tr>
            <td style="padding:10px;font-weight:bold;border-bottom:1px solid #eee;">Name</td>
            <td style="padding:10px;border-bottom:1px solid #eee;">${name}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;border-bottom:1px solid #eee;">Email</td>
            <td style="padding:10px;border-bottom:1px solid #eee;">${email}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;border-bottom:1px solid #eee;">Company</td>
            <td style="padding:10px;border-bottom:1px solid #eee;">${company || "Not provided"}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;border-bottom:1px solid #eee;">Website</td>
            <td style="padding:10px;border-bottom:1px solid #eee;">${website || "Not provided"}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;border-bottom:1px solid #eee;">Focus Area</td>
            <td style="padding:10px;border-bottom:1px solid #eee;">${focus || "Not selected"}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;vertical-align:top;">Message</td>
            <td style="padding:10px;">${message}</td>
          </tr>

        </table>

        <p style="margin-top:20px;font-size:12px;color:#888;">
          This message was sent from your website contact form.
        </p>

      </div>
    </div>
  `,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Email failed to send" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
