import Contact from "../models/Contact.js";
import { sendEmail } from "./resendService.js";

export const handleContactSubmission = async (data) => {
  const { name, email, phone, subject, message } = data;

  // 1. Save to MongoDB
  const contact = new Contact({ name, email, phone, subject, message });
  await contact.save();

  // 2. Send Email via Resend
  await sendEmail({ name, email, phone, subject, message });

  return contact;
};
