const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5002;

// Enable CORS for localhost:3000
app.use(cors({ origin: 'http://localhost:3000' }));

// Connect to MongoDB
mongoose.connect(MONGO_URI);


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

// API endpoint to handle form submission
app.post('/api/apply', upload.single('cv'), async (req, res) => {
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
    res.status(201).send('Application submitted successfully');
  } catch (error) {
    res.status(500).send('Error submitting application');
  }
});

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});