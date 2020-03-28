import React, { useState, useEffect } from 'react';
import BookResults from '../components/bookResults';
import API from '../utils/API';
import BooksContext from '../utils/booksContext';


function Saved() {

    const [apiBooks, setApiBooks] = useState([])

    useEffect(() => {
        getSavedBooks()
        // console.log(setApiBooks);
    }, [])

    function getSavedBooks() {
        API.findAllSavedBooks()
            .then(resp => {
                console.log(resp.data)
                setApiBooks(resp.data);
            })
            .catch(err => console.log(err))
    }

    function handleDeleteBook(event) {
        console.log(event.target.value);
        API.removeBook(event.target.value)
            .then(resp => {
                console.log(resp);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <BooksContext.Provider
                value={{ apiBooks, handleDeleteBook }}>
                <BookResults saveOrDelete={false} />
            </BooksContext.Provider>
        </div>
    )
}

export default Saved;