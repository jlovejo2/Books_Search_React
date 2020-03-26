const axios = require('axios');

const apiKey = process.env.MY_GOOGLE_BOOKS_API_KEY;

module.exports = {

    getBooks: function (req, res) {

        let setQuery = '';

        //This grouping of if-else statements determines the query that is used to call Books from the google books api
        //The query is based on what the user selected in the select divs and what they typed in the input.
        if (req.params.selectValue === 'Title') {
            setQuery = "https://www.googleapis.com/books/v1/volumes?q=" + req.params.inputValue + "+intitle:" + req.params.inputValue + "&printType=books&orderBy=relevance&key=" + apiKey;
        } else if (req.params.electValue === 'Author') {
            setQuery = "https://www.googleapis.com/books/v1/volumes?q=" + req.params.inputValue + "+inauthor" + req.params.inputValue + "&printType=books&orderBy=relevance&key=" + apiKey;
        } else if (req.params.selectValue === 'Subject') {
            setQuery = "https://www.googleapis.com/books/v1/volumes?q=" + req.params.inputValue + "+subject" + req.params.inputValue + "&printType=books&orderBy=relevance&key=" + apiKey;
        } else {
            setQuery = "https://www.googleapis.com/books/v1/volumes?q=" + req.params.inputValue + "&printType=books&orderBy=relevance&key=" + apiKey;
        }

        //This code performs the call to the google books api using axios and the query set by if-else statments above
        axios.get(setQuery)
            .then(booksObj => {
                const receivedData = booksObj.data.items
                console.log(booksObj.data.items);
                
                //Manipulating the content of the data received from Google Books Api
                //It is a large object with more data than is needed on the fron-end.
                //A new array of objects is made with the data that is desired from the googlebooks api and then it is sent to the client
                const newApiArr = receivedData.map( apiObject => {
                    let newApiObj = {
                        title: apiObject.volumeInfo.title,
                        subtitle: apiObject.volumeInfo.subtitle,
                        authors: apiObject.volumeInfo.authors,
                        image: apiObject.volumeInfo.imageLinks.thumbnail,
                        preview: apiObject.volumeInfo.description,
                        link: apiObject.volumeInfo.infoLink,
                        googleID: apiObject.id
                    } 

                    return newApiObj
                })
                
                res.json(newApiArr);

            })
            .catch(err => console.log(err))
    }

}