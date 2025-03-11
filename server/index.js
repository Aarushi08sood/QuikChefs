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

// Enable CORS for your frontend URL
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow all necessary methods
  credentials: true, // Allow cookies and credentials
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define a schema for the application
const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  position: String,
  cv: String, // Store the file URL
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
    folder: 'cv_uploads', // Folder in Cloudinary
    format: async (req, file) => 'pdf', // Supports other formats like 'png', 'jpg', etc.
    public_id: (req, file) => `cv_${Date.now()}`, // Unique public ID
  },
});

const upload = multer({ storage });

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Your email address
    pass: process.env.GMAIL_APP_PASSWORD, // Your email app password
  },
});

// Configure Twilio
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// API endpoint to handle form submission
app.post('/api/apply', upload.single('cv'), async (req, res) => {
  console.log('Request body:', req.body); // Log the request body
  console.log('Uploaded file:', req.file); // Log the uploaded file

  const { name, email, phone, position } = req.body;
  const cvUrl = req.file.path; // Cloudinary file URL

  const application = new Application({
    name,
    email,
    phone,
    position,
    cv: cvUrl,
  });

  try {
    await application.save();
    console.log('Application saved to MongoDB');

    // Send email notification
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Your email address
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
      from: 'whatsapp:+14155238886', // Twilio's WhatsApp number
      to: `whatsapp:${process.env.TWILIO_WHATSAPP_TO}` // Your WhatsApp number
    })
    .then(message => console.log('WhatsApp message sent:', message.sid))
    .catch(error => console.error('Error sending WhatsApp message:', error));

    res.status(201).send('Application submitted successfully');
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).send('Error submitting application');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});