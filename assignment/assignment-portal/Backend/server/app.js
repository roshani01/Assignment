/*// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/assignments', require('./routes/assignmentRoutes'));

// Server Port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));*/

const app = require('express')();
const http = require('http').Server(app);
const mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.connect("mongodb+srv://<db_username>:8BQOhNNwVBAFbs2K@testpro.q8c0o.mongodb.net/?retryWrites=true&w=majority&appName=testpro")
 
//const Assignment = require('../models/Assignment');
const User = require('../models/User');  // Ensure the correct path
//const connectDB = require('./config/database');
//const authRoutes = require('./routes/authRoutes');
//const assignmentRoutes = require('./routes/assignmentRoutes');


http.listen(27017,function(){
 console.log('Server is running');
});


