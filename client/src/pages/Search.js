import React, { useState, useEffect } from 'react';
import { Input, Select, Option } from '../components/SearchBar'
import { Section, Container, Tile } from '../components/Grid';
import BookResults from '../components/bookResults';
import Button from '../components/Button';
import Modal from '../components/Modal';
import API from '../utils/API';
import BooksContext from '../utils/booksContext';

function Search() {

    const [selectOptions, setSelectOptions] = useState([]);
    const [apiSearchObj, setApiSearchObj] = useState({})
    // const [selectValue, setSelectValue] = useState('');
    // const [inputValue, setInputValue] = useState('');
    const [apiBooks, setApiBooks] = useState([]);
    const [activateModal, setActivateModal] = useState(false);

    useEffect(() => {

        setSelectOptions(['Keyword', 'Author', 'Title', 'Subject']);
        console.log(apiBooks);

    }, [apiBooks])

    function handleCloseModal() {
        console.log('closing Modal');
        setActivateModal(false);
    }

    function handleInputChange(event) {

        console.log(event.target.name);
        console.log(event.target.value);
        const { name, value } = event.target;
        setApiSearchObj({ ...apiSearchObj, [name]: value })
        console.log(apiBooks);
    };

    function handleSelectChange(event) {

        const value = event.target.value;
        const name = 'selectValue'
        setApiSearchObj({ ...apiSearchObj, [name]: value })
        console.log(apiBooks);
    }

    function handleSearchSubmit() {
        console.log(apiSearchObj.selectValue);
        console.log(apiSearchObj.inputValue);

        if (!apiSearchObj.selectValue || !apiSearchObj.inputValue) {
            console.log('search criteria undefined');
        } else {

            API.searchGoogleBooks(apiSearchObj.selectValue, apiSearchObj.inputValue)
                .then(respObj => {
                    setApiBooks(respObj.data);
                    console.log(apiBooks);
                })
                .catch(err => console.log(err))
        }
    }

    function handleSaveBook(event) {
        console.log('saving book');
        const toSave = apiBooks.filter(book => book.googleID === event.target.value )

        API.saveBook(toSave[0])
            .then(resp => {
                console.log(resp)
                setActivateModal(true);
            });
    }

    return (
        <div>
            <Section classes={'section'}>
                <Container fluid={true}>
                    <Tile ancestor={true} customClass={''}>
                        <Tile parent={true} customClass={'level'}>
                            <div className='level-right'>
                                <Select onChange={handleSelectChange} name={'name'} value={apiSearchObj.selectValue} >
                                    {
                                        selectOptions.map((value, index) => {
                                            return <Option key={index} name={'name'} value={value}> {value} </Option>
                                        })
                                    }
                                </Select>
                            </div>
                            <div className='level-item'>
                                <Input
                                    inputcolor={'is-success'}
                                    inputsize={'is-medium'}
                                    placeholder='Input search text here'
                                    onChange={handleInputChange}
                                    name={'inputValue'}
                                    size='100'
                                >
                                </Input>
                            </div>
                            <div className='level-left'>
                                <Button customclass='button is-dark is-medium is-hovered' onClick={handleSearchSubmit}>
                                    Search
                                </Button>
                            </div>
                        </Tile>
                    </Tile>
                </Container>
                <BooksContext.Provider 
                value={{ apiBooks, handleSaveBook}}>
                    <BookResults saveOrDelete={true} />
                </BooksContext.Provider>
            </Section >
            <Modal title={'Book Saved!!'} active={activateModal} closeButton={handleCloseModal}>
                This book has been saved and can be viewed by clicking on the saved page link.
            </Modal>
        </div>
    )
}

export default Search;