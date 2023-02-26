// required modules
const mongoose = require("mongoose");
// to avoid warnings....all the fields will be saved in the database, even if some of them are not specified in the schema model.
mongoose.set("strictQuery", false);

//  Connect to the database ... change from localhost to 0.0.0.0
mongoose.connect("mongodb://0.0.0.0/todo_db");
// acquiring the db(if available)
const db = mongoose.connection;

// Checking if there are any errors
db.on("error", console.error.bind(console, "connection error:"));

// Running the connection
db.once("open", function () {
  console.log("Connected to MongoDB");
});
