//Imports express npm
const express = require('express');

//calls the express.router method
const router = express.Router();
const apiController = require("../controllers/googleBooksController");



//Matches with the url specified in the route('')
router.route('/api/googleBooks/:selectValue/:inputValue')
    .get(apiController.getBooks)




// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:query")
//   .get()

module.exports = router;