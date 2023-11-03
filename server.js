// Load env variables
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

// Import dependencies
const express = require('express');
const dbconnection = require('./config/dbconnection');

// Create express app
const app = express();

// Database connection
dbconnection();

// Routes
app.get("/", (req, res) => {
    res.json({ hello: "world" });
});

// Starting the server
app.listen(process.env.PORT);