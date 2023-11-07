// Load env variables
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

// Import dependencies
const express = require('express');
const dbconnection = require('./config/dbconnection');
const Note = require('./model/note');

// Create express app
const app = express();

// Configure express app to read json
app.use(express.json());

// Database connection
dbconnection();

// Routess
// Display hello world in the main page
app.get("/", (req, res) => {
    res.json({ hello: "world" });
});

// Send data to the app
app.post("/notes", (req, res) => {
    // Get the sent data
    const title = req.body.title;
    const body = req.body.body;
});

// Starting the server
app.listen(process.env.PORT);