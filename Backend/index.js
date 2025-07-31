const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to DB
const connection = require('./utils.js/db'); // ✅ This automatically connects because .connect() is called inside db.js

// Import Routes
const authRoutes = require('./routes/authRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const jobRoutes = require('./routes/jobRoutes');
const applicationRouter=require('./routes/applicationRoute')

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/resume', resumeRoutes);
app.use('/api/job', jobRoutes);
app.use('/api/job',applicationRouter);


// Base Route
app.get('/', (req, res) => {
  res.send('HireBridge API is running 🚀');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
