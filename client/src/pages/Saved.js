import React, { useState, useEffect } from 'react';
import BookResults from '../components/bookResults';
import Modal from '../components/Modal';
import API from '../utils/API';
import BooksContext from '../utils/booksContext';


function Saved() {

    const [apiBooks, setApiBooks] = useState([])
    const [activateModal, setActivateModal] = useState(false);

    useEffect(() => {
        getSavedBooks()
        // console.log(setApiBooks);
    }, [apiBooks])

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
                if (resp.data._id === event.target.value) {
                    console.log('book deleted')
                    setActivateModal(true)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <BooksContext.Provider
                value={{ apiBooks, handleDeleteBook }}>
                <BookResults saveOrDelete={false} />
            </BooksContext.Provider>
            <Modal title={'Please read ...'} active={activateModal}>
                Book has been deleted
            </Modal>
        </div>
    )
}

export default Saved;