import React, { useState, useEffect } from 'react';
import { Input, Select, Option } from '../components/SearchBar'
import { Section, Container, Tile } from '../components/Grid';
// import { set } from 'mongoose';
import API from '../utils/API';

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
                                <button className='button is-dark is-medium is-hovered' onClick={handleSearchSubmit}>
                                    Search
                                </button>
                            </Tile>
                        </Tile>
                    </Tile>
                </Container>
            </Section >
            <Section class={'section'}>
                <Container fluid={'true'}>
                    {apiBooks.length ?
                        apiBooks.map(book => {
                            return (
                                <Tile ancestor={true} customClass={'notification is-dark bookItem'} key={book.googleID}>
                                    <Tile parent={true} vertical={false} customClass={''} >
                                        <Tile parent={false} customClass={'figure notification is-warning is-2 image is-1by2'}>
                                            <figure className='tile is-child'>
                                                <img src={book.image} href={book.link} alt='Book Cover'></img>
                                            </figure>
                                        </Tile>
                                        <Tile parent={false} customClass={'is-10'}>

                                            <Tile parent={true} vertical={false} customClass={'notification is-link'}>
                                                <Tile parent={false} customClass={'is-6'}>
                                                    <article className='tile'>
                                                        <div className='content'>
                                                            <h1>{book.title}</h1>
                                                            <h3>{!book.subtitle ? 'Enjoy the read!' : book.subtitle}</h3>
                                                            <p>Authors: {!book.authors ? ' No Authors Listed' : book.authors.toString()}</p>
                                                        </div>
                                                    </article>
                                                </Tile>
                                                <Tile parent={false}>
                                                    <button className='button tileButton' href={book.link}>
                                                        View
                                                    </button>
                                                    <button className='button tileButton'>
                                                        Save
                                                    </button>
                                                </Tile>
                                            </Tile>

                                            <Tile parent={true} customClass={'notification is-link'}>
                                                <article className='tile'>
                                                    <div className='content'>
                                                        <p>{book.preview}</p>
                                                    </div>
                                                </article>
                                            </Tile>

                                            {/* </Tile> */}
                                        </Tile>

                                    </Tile>
                                </Tile>
                            )
                        }) :
                        <Tile>
                            <p>
                                No results
                            </p>
                        </Tile>
                    }
                </Container>
            </Section>
        </div>
    )
}

export default Search;