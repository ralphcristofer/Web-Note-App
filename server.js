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

// Setup HTTP POST with async operation
app.post("/notes", async (req, res) => {
    // Get the content of the note
    const title = req.body.title;
    const body = req.body.body;

    // Create a new note in the database
    const note = await Note.create({
       title: title,
       body: body
    });

    // Response back to client with the 
    // newly created note
    // in JSON format
    res.json({ note: note });
});

// Starting the server
app.listen(process.env.PORT);