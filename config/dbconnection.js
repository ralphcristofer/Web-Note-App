// Load env variables
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

// Import colors
const { RESET_COLOR, GREEN, YELLOW_BACKGROUND } = require('./colors');

// Using Node.js `require()`
const mongoose = require('mongoose');

// Database function
async function dbconnection() {
    try {
        await mongoose.connect(process.env.DB_CONN);
        console.log(`${YELLOW_BACKGROUND}${GREEN}*** Connected to the database ***${RESET_COLOR}`);
    } catch (e) {
        console.log(e);
    }
}

module.exports = dbconnection;