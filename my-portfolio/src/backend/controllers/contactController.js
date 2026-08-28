const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Check required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Please fill in all fields.",
      });
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return res.status(400).json({
        message: "Please enter a valid email address.",
      });
    }

    // Save contact message
    const newContact = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    res.status(201).json({
      message: "Message sent successfully.",
      contact: newContact,
    });

  } catch (error) {
    res.status(500).json({
      message: "Something went wrong. Please try again.",
    });
  }
};

module.exports = {
  createContact,
};