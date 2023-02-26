// import express module
const express = require("express");
const path = require("path");
const port = 80;

// Database connection
const db = require("./config/mongoose");
const Tasks = require("./models/task");

const app = express();

// setting up ejs template/view engine
app.set("view engine", "ejs");
// view path
app.set("views", path.join(__dirname, "views"));
//Middelware or Parser
app.use(express.urlencoded({ extended: true }));
// Static assets by use of middleware
app.use(express.static("Assets"));

// Controller for home page
// Display home page data or fetching data 
app.get("/", (req, res) => {
  // Find task to filter
  Tasks.find({}, 
    function (err, tasks){
    if (err) {
      console.log("Error in fetching Tasks");
      return;
    }
    res.render("home.ejs", {
      title: "TODO List",
      tasks: tasks,
    });
  });
});

// Pushing data to the database
app.post("/add-task", (req, res) => {
  res.create(
    {
      task: res.body.task,
      category: res.body.category,
      date: res.body.date,

    },
    function (err, newTask) {
      console.log(newTask + "added!");
      return res.redirect("back");
    }
  );
});


// Deleting data from the database
app.post("/delete-task", (req, res) => {
  // console.log(req.query);
  var id = req.query.id;

  // to check the number of tasks to be deleted
  var count = Object.keys(id).length;
  for (let i = 0; i < count; i++) {
      //Deleting the task from the database by using their individual ids
      Tasks.findByIdAndDelete(Object.keys(id)[i], function(err) {
          if (err) {
              console.log("Error in deleting the task from DB");
              return;
          }
      });
      console.log("Task-Deleted");
  }
  return res.redirect('back');
});


app.listen(port, (err) => {
  if (err) {
    console.log("Error in listening to requests");
    return;
  }
  console.log(`Server running at http://localhost:${port}`);
});
