const toDoList = require('./To_Do_Model');

const toDoListController = {
  // Get a initial list from the database and send it in the response
  getList(req, res) {
    toDoList.find({}, (err, info) => {
      if (err) res.sendStatus(418).send(err);
        res.send(info)
    });
  },
  // Create a new toDoList in the Database
  // Their information will be sent in the request body
  // This should send the created student
  createToDoList(req, res) {
  toDoList.create({item: req.body.item, completed: req.body.completed}, (err, info)=>{
      if (err)  res.sendStatus(418).send(err);
     res.status(200).send(info);
  })
  },

  

  // Get a student from the database and update the student
  // The student's first name will be in the request parameter 'name'
  // The student's new first name will be in the request body
  updateStudent(req, res) {
    toDoList.findOneAndUpdate({ firstName: req.params.name },{new:true}, (err, info) => {
      if (err) res.sendStatus(418).send(err);
      res.send(info)
    });
    

  },

  // Delete a student from the database
  // The student's first name will be sent in the request parameter 'name'
  // This should send a success status code
  deleteStudent(req, res) {
    toDoList.findOneAndDelete({ firstName: req.name }, function (err) {
      if (err) res.sendStatus(418).send(err);
     res.sendStatus(200);
    });

  },
};

module.exports = toDoListController;
