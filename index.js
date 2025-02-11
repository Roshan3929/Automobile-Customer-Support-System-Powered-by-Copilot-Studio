const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const authRoutes = require("./routes/authRoutes");
const questionRoutes = require("./routes/questions.routes.js");
const answerRoutes = require("./routes/answers.routes.js");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config(); // Add this line to load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", authRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/answers", answerRoutes);

// Connect to MongoDB
mongoose.connect("mongodb+srv://admins:4postr0phe@stock.sxr4y.mongodb.net/?retryWrites=true&w=majority&appName=Stock", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Appointment Route
app.post("/api/appointments", async (req, res) => {
  const { name, phone, email, date, time } = req.body;

  // Send email notification
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Appointment Confirmation',
    text: `Dear ${name},\n\nYour appointment is confirmed for ${date} at ${time}.\n\nThank you!`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(201).json({ message: "Appointment booked and email sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error booking appointment or sending email." });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));