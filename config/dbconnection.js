// Load env variables
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

// Using Node.js `require()`
const mongoose = require('mongoose');

// Database function
async function dbconnection() {
    try {
        await mongoose.connect(process.env.DB_CONN);
        console.log("Connected to the database");
    } catch (e) {
        console.log(e);
    }
}

module.exports = dbconnection;