require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const app = express();
const port = process.env.PORT || 5002;

// Enable CORS for the specified origin
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:3000' }));
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define a schema for the application
const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  position: String,
  cv: String, // Store the Cloudinary file URL
});

const Application = mongoose.model('Application', applicationSchema);

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up multer with Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'resumes', // Folder in Cloudinary
    format: async (req, file) => 'pdf', // Supports other formats like 'png', 'jpg', etc.
    public_id: (req, file) => `resume-${Date.now()}`, // Unique file name
  },
});

const upload = multer({ storage });

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Configure Twilio
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// API endpoint to handle form submission
app.post('/api/apply', upload.single('cv'), async (req, res) => {
  console.log('Request body:', req.body); // Log the request body
  console.log('Uploaded file:', req.file); // Log the uploaded file

  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const { name, email, phone, position } = req.body;
  const cvUrl = req.file.path; // Cloudinary file URL

  console.log('CV URL:', cvUrl); // Log the Cloudinary URL

  try {
    // Save application data to MongoDB
    const application = new Application({
      name,
      email,
      phone,
      position,
      cv: cvUrl, // Store the Cloudinary file URL
    });

    await application.save();
    console.log('Application saved to MongoDB');

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email address
      subject: 'New Job Application Submitted',
      text: `A new job application has been submitted:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    // Send WhatsApp notification
    client.messages.create({
      body: `A new job application has been submitted:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}`,
      from: process.env.TWILIO_WHATSAPP_NUMBER, // Twilio's WhatsApp number
      to: process.env.YOUR_WHATSAPP_NUMBER, // Your WhatsApp number
    })
      .then((message) => console.log('WhatsApp message sent:', message.sid))
      .catch((error) => console.error('Error sending WhatsApp message:', error));

    res.status(201).json({ message: 'Application submitted successfully!', cvUrl });
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).json({ error: 'Error submitting application' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
