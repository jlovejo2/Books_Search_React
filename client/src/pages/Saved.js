import React, { useState, useEffect } from 'react';
// import { Input, Select, Option } from '../components/SearchBar'

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
        console.log(event);
    }

    return (
        <div>
            <BooksContext.Provider
                value={{ apiBooks, handleDeleteBook }}>
                <BookResults />
            </BooksContext.Provider>
        </div>
    )
}

export default Saved;