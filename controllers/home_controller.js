
// Fetch all models
const TaskList = require("../models/task");

// Constroller for home page
module.exports.home = function (req, res) {
  // Find task to filter
  // Fetches tasks from database
  TaskList.find({}, function (err, tasks) {
    if (err) {
      console.log("Error in fetching Tasks");
      return;
    }
    return res.render('home',{
        title : "TO DO List!", 
        todo_list : tasks
     });
  });
};

// Controller for adding a task
module.exports.add = function (req, res) {
  TaskList.create(req.body, function (err, task) {
    if (err) {
      console.log("error in creating the list");
      return;
    }
    console.log(task);
    return res.redirect("back");
  });
};

// Controller for deleting a task
module.exports.delete = function (req, res) {
  // get id of selected task
  var id = req.query;
  console.log(id);

  let selectedTask = Object.keys(id).length;
   // to check the number of tasks to be deleted
   for (let i = 0; i < selectedTask; i++) {
       //Deleting the task from the database by using their individual ids
       Tasks.findByIdAndDelete(Object.keys(id)[i], 
       function(err) {
           if (err) {
               console.log("Error in deleting the task from DB");
               return;
           }
       });
       console.log("Task-Deleted");
   }
   return res.redirect('back');
  };
