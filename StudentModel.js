const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// The document schema should have 3 things
// A "firstName" that is a string
// A "lastName" that is a string
// An "age" that is a number
// All of these should be required.
// Create your schema here

const studentSchema = new Schema({
    // define schema here
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Number, required: true},
  });

// You must export your model through module.exports
// The collection name should be 'student'
 

module.exports = mongoose.model('Student', studentSchema);
