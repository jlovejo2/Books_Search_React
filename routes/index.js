//Imports express npm
const express = require('express');

//calls the express.router method
const router = express.Router();

// const booksController = require("../../controllers/booksController");

const apiKey = process.env.MY_GOOGLE_BOOKS_API_KEY

router.get('/api/googleBooks/:selectValue/:inputValue', function(req,res) {

    console.log(req.params.query);

    if(selectValue === 'Title') {
        setQuery = "https://www.googleapis.com/books/v1/volumes?q=" + inputValue + "+intitle:" + inputValue + "&printType=books&orderBy=relevance&key=" + apiKey;
    } else if (selectValue === 'Author') {
        setQuery = "https://www.googleapis.com/books/v1/volumes?q=" + inputValue + "+inauthor" + inputValue + "&printType=books&orderBy=relevance&key=" + apiKey;
    } else if (selectValue ==='Subject') {
        setQuery = "https://www.googleapis.com/books/v1/volumes?q=" + inputValue + "+subject" + inputValue + "&printType=books&orderBy=relevance&key=" + apiKey;
    } else {    
        setQuery = "https://www.googleapis.com/books/v1/volumes?q=" + inputValue + "&printType=books&orderBy=relevance&key=" + apiKey;
    }
})



// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:query")
//   .get()

module.exports = router;