import { handleContactSubmission } from "../services/contactService.js";

export const submitContactForm = async (req, res) => {
  try {
    const savedContact = await handleContactSubmission(req.body);
    res
      .status(200)
      .json({ message: "Form submitted successfully", data: savedContact });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error submitting form", error: error.message });
  }
};
