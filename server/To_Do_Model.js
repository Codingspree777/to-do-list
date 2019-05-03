const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// The document schema should have 3 things
// A "firstName" that is a string
// A "lastName" that is a string
// An "age" that is a number
// All of these should be required.
// Create your schema here

const toDoSchema = new Schema({
    // define schema here
    item: {type: String, required: true},
    completed: {type: Boolean, required: true},
  });

// You must export your model through module.exports
// The collection name should be 'student'
 

module.exports = mongoose.model('ToDoList', toDoSchema);
