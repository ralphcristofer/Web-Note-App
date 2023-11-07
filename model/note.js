
const mongoose = require('mongoose');

// Creating a schema with two parts
const noteSchema = new mongoose.Schema({
    title: String,
    body: String
});

// Compiling schema into a model
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;