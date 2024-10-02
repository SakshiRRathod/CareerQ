require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter'); // Make sure this path is correct

require('./Models/db'); // Ensure this file correctly connects to your MongoDB

const PORT = process.env.PORT || 8081;

// Simple route for testing the server
app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Authentication routes
app.use('/auth', AuthRouter); // Ensure AuthRouter is defined and imported correctly

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
