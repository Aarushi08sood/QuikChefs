const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');
const twilio = require('twilio');

const app = express();
const port = 5002;

// Enable CORS for localhost:3000
app.use(cors({ origin: 'http://localhost:3000' }));

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define a schema for the application
const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  position: String,
  cv: String, // Store the file path or URL
});

const Application = mongoose.model('Application', applicationSchema);

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service
  auth: {
    user: 'your-email@gmail.com', // Your email address
    pass: 'appPassword', // Your email password
  },
});

// Configure Twilio
const accountSid = 'your-twilio-account-sid';
const authToken = 'your-twilio-auth-token';
const client = twilio(accountSid, authToken);

// API endpoint to handle form submission
app.post('/api/apply', upload.single('cv'), async (req, res) => {
  console.log('Request body:', req.body); // Log the request body
  console.log('Uploaded file:', req.file); // Log the uploaded file

  const { name, email, phone, position } = req.body;
  const cvPath = req.file.path;

  const application = new Application({
    name,
    email,
    phone,
    position,
    cv: cvPath,
  });

  try {
    await application.save();
    console.log('Application saved to MongoDB');

    // Send email notification
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'your-email@gmail.com', // Your email address
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
      to: 'whatsapp:+your-phone-number' // Your WhatsApp number
    })
    .then(message => console.log('WhatsApp message sent:', message.sid))
    .catch(error => console.error('Error sending WhatsApp message:', error));

    res.status(201).send('Application submitted successfully');
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).send('Error submitting application');
  }
});

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});