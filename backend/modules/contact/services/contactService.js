import Contact from "../models/Contact.js";

export const handleContactSubmission = async (data) => {
  const { name, email, phone, subject, message } = data;

  // 1. Save to MongoDB
  const contact = new Contact({ name, email, phone, subject, message });
  await contact.save();

  return contact;
};
