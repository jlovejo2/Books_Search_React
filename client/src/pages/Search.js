import React, { useState, useEffect } from 'react';
import { Input, Select, Option } from '../components/SearchBar'
import { Section, Container, Tile } from '../components/Grid';
import BookResults from '../components/bookResults';
import Button from '../components/Button';
// import { set } from 'mongoose';
import API from '../utils/API';
import BooksContext from '../utils/booksContext';

function Search() {

    const [selectOptions, setSelectOptions] = useState([]);
    const [apiSearchObj, setApiSearchObj] = useState({})
    // const [selectValue, setSelectValue] = useState('');
    // const [inputValue, setInputValue] = useState('');
    const [apiBooks, setApiBooks] = useState([]);

    useEffect(() => {

        setSelectOptions(['Keyword', 'Author', 'Title', 'Subject']);
        console.log(apiBooks);

    }, [apiBooks])

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
    // function handleInputValueChange(event) {

    //     setInputValue(event.target.value);
    //     console.log(inputValue);
    // }

    // function handleSelectValueChange(event) {

    //     setSelectValue(event.target.value);
    //     console.log(selectValue);
    // }

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
            .then(resp => console.log(resp));
    }

    return (
        <div>
            <Section classes={'section'}>
                <Container fluid={true}>
                    <Tile ancestor={true}>
                        <Tile parent={true} customClass={'is-10 is-center'}>
                            <Tile parent={false} customClass={'is-2 is-center'}>
                                <Select onChange={handleSelectChange} name={'name'} value={apiSearchObj.selectValue} >
                                    {
                                        selectOptions.map((value, index) => {
                                            return <Option key={index} name={'name'} value={value}> {value} </Option>
                                        })
                                    }
                                </Select>
                            </Tile>
                            <Tile parent={false} customClass={'is-8 is-center'}>
                                <Input
                                    inputcolor={'is-success'}
                                    inputsize={'is-medium'}
                                    placeholder='Input search text here'
                                    onChange={handleInputChange}
                                    name={'inputValue'}
                                >
                                </Input>
                            </Tile>
                            <Tile parent={false}>
                                <Button customClass='button is-dark is-medium is-hovered' onClick={handleSearchSubmit}>
                                    Search
                                </Button>
                            </Tile>
                        </Tile>
                    </Tile>
                </Container>
                <BooksContext.Provider 
                value={{ apiBooks, handleSaveBook}}>
                    <BookResults />
                </BooksContext.Provider>
            </Section >
        </div>
    )
}

export default Search;