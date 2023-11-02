// Load env variables
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

// Import dependencies
const express = require('express')

// Create express app
const app = express()

// Routes
app.get("/", (req, res) => {
    res.json({ hello: "world" });
});

// Starting the server
app.listen(process.env.PORT);