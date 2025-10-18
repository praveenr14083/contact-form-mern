import { handleContactSubmission } from "../services/contactService.js";
import { sendEmail } from "../services/resendService.js";

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // 1. Save to MongoDB
    const savedContact = await handleContactSubmission({
      name,
      email,
      phone,
      subject,
      message,
    });

    // 2. Send Email via Resend
    await sendEmail({ name, email, phone, subject, message });

    res.status(200).json({
      message: "Form submitted successfully",
      data: savedContact,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error submitting form",
      error: error.message,
    });
  }
};
