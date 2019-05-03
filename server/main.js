const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const toDoListController = require('./To_Do_Controller');

const PORT = 3000;

mongoose.connect('mongodb+srv://student:ilovetesting@cluster0-zljzt.mongodb.net/test?retryWrites=true');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const toDoListRouter = express.Router();

// Create a student in the database
// localhost://3000/student
toDoListRouter.post('/', toDoListController.createToDoList);


// Get a student from the database
// localhost://3000/student/"name"
toDoListRouter.get('/:list', toDoListController.getStudent);

// Change a students name
// localhost://3000/student/"name"
toDoListRouter.patch('/:list', toDoListController.updateStudent);

// Delete a student from the database
// localhost://3000/student/"name"
toDoListRouter.delete('/:list', toDoListController.deleteStudent);

app.use('/ToDoList', toDoListRouter);



app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
