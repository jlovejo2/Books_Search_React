//Imports express npm
const express = require('express');

//calls the express.router method
const router = express.Router();
const axios = require('axios');
// const booksController = require("../../controllers/booksController");

const apiKey = process.env.MY_GOOGLE_BOOKS_API_KEY

router.get('/api/googleBooks/:selectValue/:inputValue', function(req,res) {

    let setQuery ='';

    if(req.params.selectValue === 'Title') {
        setQuery = "https://www.googleapis.com/books/v1/volumes?q=" + req.params.inputValue + "+intitle:" + req.params.inputValue + "&printType=books&orderBy=relevance&key=" + apiKey;
    } else if (req.params.electValue === 'Author') {
        setQuery = "https://www.googleapis.com/books/v1/volumes?q=" + req.params.inputValue + "+inauthor" + req.params.inputValue + "&printType=books&orderBy=relevance&key=" + apiKey;
    } else if (req.params.selectValue ==='Subject') {
        setQuery = "https://www.googleapis.com/books/v1/volumes?q=" + req.params.inputValue + "+subject" + req.params.inputValue + "&printType=books&orderBy=relevance&key=" + apiKey;
    } else {    
        setQuery = "https://www.googleapis.com/books/v1/volumes?q=" + req.params.inputValue + "&printType=books&orderBy=relevance&key=" + apiKey;
    }

    axios.get(setQuery)
        .then( booksObj => {
            const receivedData = booksObj.data.items
            console.log(booksObj.data);
            res.json(receivedData);
        })
        .catch(err => console.log(err))

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