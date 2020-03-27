//Imports express npm
const express = require('express');

//calls the express.router method
const router = express.Router();
const apiController = require("../controllers/googleBooksController");
const savedBooksController = require("../controllers/savedBooksController");



//Matches with the url specified in the route('')
router.route('/api/googleBooks/:selectValue/:inputValue')
    .get(apiController.getBooks)

    
// Matches with "/api/books"
router.route("/api/savedBooks")
      .get(savedBooksController.findAll)
      .post(savedBooksController.create);
    
// Matches with "/api/books/:id"
router.route("api/savedBooks/:id")
      .get(savedBooksController.findById)
      .delete(savedBooksController.remove);
     

module.exports = router;