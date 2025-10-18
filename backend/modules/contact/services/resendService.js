import { Resend } from "resend";
import { ENV } from "../../../config/env.config.js";

const resend = new Resend(ENV.RESEND_API_KEY);

export const sendEmail = async ({ name, email, phone, subject, message }) => {
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Hardcoded sender
      to: "praveengabap@gmail.com", // Hardcoded recipient
      reply_to: email, // User's email for replies
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });
    console.log("Email sent successfully (HTML)");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
