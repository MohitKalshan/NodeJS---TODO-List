// import express module
const express = require("express");
// Database connection
const db = require("./config/mongoose");
// Default port to listen on
const port = 8000;

const app = express();

// setting up ejs template/view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//Middelware or Parser
app.use(express.urlencoded({
  extended: true
}));



// Static assets by use of middleware
app.use(express.static("./Assets"));

// Use express router
app.use('/', require("./routes/index"));

// app listening on port
app.listen(port, (err) => {
  if (err) {
    console.log("Error in listening to requests");
    return;
  }
  console.log(`Server running at http://localhost:${port}`);
});
