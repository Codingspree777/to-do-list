const Student = require('./StudentModel');

const StudentController = {
  // Create a new student in the Database
  // Their information will be sent in the request body
  // This should send the created student
  createStudent(req, res) {
  //  let Student = new student({ firstName: req.body.firstName, lastName: req.body.lastName, age: req.body.age});
    
  //   Student.save(function (err, info) {
  //   if (err)  res.sendStatus(418).send(err);
  //    res.send(info);
  //   });
  Student.create({firstName: req.body.firstName, lastName: req.body.lastName, age: req.body.age}, (err, info)=>{
      if (err)  res.sendStatus(418).send(err);
     res.status(200).send(info);
  })
  },

  // Get a student from the database and send it in the response
  // Their first name will be in the request parameter 'name'
  // This should send the found student
  getStudent(req, res) {
    Student.findOne({firstName: req.params.name}, (err, info) => {
      if (err) res.sendStatus(418).send(err);
        res.send(info)
    });
  },

  // Get a student from the database and update the student
  // The student's first name will be in the request parameter 'name'
  // The student's new first name will be in the request body
  updateStudent(req, res) {
    Student.findOneAndUpdate({ firstName: req.params.name },{new:true}, (err, info) => {
      if (err) res.sendStatus(418).send(err);
      res.send(info)
    });
    

  },

  // Delete a student from the database
  // The student's first name will be sent in the request parameter 'name'
  // This should send a success status code
  deleteStudent(req, res) {
    Student.findOneAndDelete({ firstName: req.name }, function (err) {
      if (err) res.sendStatus(418).send(err);
     res.sendStatus(200);
    });

  },
};

module.exports = StudentController;
