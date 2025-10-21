// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {  firstName,
        lastName,
        email,
        phone,
        subject,
        message } = await req.json();

    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const recipients = process.env.EMAIL_TO.split(",");

    const mailOptions = {
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: recipients,
      subject: "New Contact Form Submission",
      text: `
        name: ${firstName} + " " + ${lastName},
       
        email: ${email},
        phone: ${phone},
        subject: ${subject},
        message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "Email sent!" }, { status: 200 });
  } catch (err) {
    console.error("Mail error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
