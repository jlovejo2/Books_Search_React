import React, { useState, useEffect } from 'react';
import BookResults from '../components/bookResults';
import Modal from '../components/Modal';
import API from '../utils/API';
import BooksContext from '../utils/booksContext';


function Saved() {

    const [apiBooks, setApiBooks] = useState([])
    const [activateModal, setActivateModal] = useState(false);

    useEffect(() => {
        console.log('useEffect')
        getSavedBooks()
        // console.log(setApiBooks);
    }, [activateModal])

    function handleCloseModal() {
        console.log('closing Modal');
        setActivateModal(false);
    }

    function getSavedBooks() {
        console.log('Getting Saved Books');
        API.findAllSavedBooks()
            .then(resp => {
                console.log(resp.data)
                setApiBooks(resp.data);
            })
            .catch(err => console.log(err))
    }

    function handleDeleteBook(event) {
        const bookID = event.target.value;
        console.log(event.target.value);
        API.removeBook(event.target.value)
            .then(resp => {
                console.log(resp);
                if (resp.data._id === bookID) {
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
            <Modal title={'Book has been deleted!'} active={activateModal} closeButton={handleCloseModal}>
                Book has been deleted please enjoy the rest of the site.
            </Modal>
        </div>
    )
}

export default Saved;