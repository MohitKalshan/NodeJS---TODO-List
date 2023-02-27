const express = require("express");
const router = express.Router();

// controller to handle routes
const homeController = require("../controllers/home_controller");
console.log("Router loaded");

// Controller for home page
// Display home page data or fetching data
router.get("/", homeController.home);

// Pushing data to the database
router.post("/add-task", homeController.add);

// Deleting data from the database
router.get("/delete-task", homeController.delete);

module.exports = router;
