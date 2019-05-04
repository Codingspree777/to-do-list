const fs = require('fs');
const path = require('path')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const toDoListController = require('./To_Do_Controller');

const PORT = 3000;

mongoose.connect('mongodb+srv://student:ilovetesting@cluster0-zljzt.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});
//mongoose.connect('mongodb+srv://student:ilovetesting@cluster0-zljzt.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
// app.use(express.static('client')); 


app.get('/', (req, res) => {
  //response with set header
  ///set path
  let file = path.join(__dirname, '../client/', 'this.html')
  //set header
  res.header("Content-Type", "text/html; charset=utf-8");
  //need since a __dirname is created, we can shortcut to send file. 
  res.sendFile(file);
    
})

app.get('/index.js', (req, res) => {
  //response with set header
  ///set path
  let file3 = path.join(__dirname, '../client/', 'index.js')
  //set header
  res.header("Content-Type", "text/javascript");
  //need since a __dirname is created, we can shortcut to send file. 
  res.sendFile(file3); 
})



app.get('/styles.css', (req, res) => {
  //response with set header
  let file2 = path.join(__dirname, '../client', 'styles.css')
  ///set path
  res.header("Content-Type", "text/css; charset=UTF-8");
  //set header
  //need since a __dirname is created, we can shortcut to send file. 
  res.sendFile(file2);
    
})



const toDoListRouter = express.Router();



// Get initial list if any from the database
toDoListRouter.get('/:list', toDoListController.getList);
// Create a student in the database
// localhost://3000/student
toDoListRouter.post('/create', toDoListController.createToDoList);


// Change a students name
// localhost://3000/student/"name"
toDoListRouter.patch('/:list', toDoListController.updateItem);

// Delete a student from the database
// localhost://3000/student/"name"
toDoListRouter.delete('/:list', toDoListController.deleteItem);

app.use('/ToDoList', toDoListRouter);



app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
