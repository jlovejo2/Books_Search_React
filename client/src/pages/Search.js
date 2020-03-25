import React, { useState, useEffect } from 'react';
import { Input, Select, Option } from '../components/SearchBar'
import { Col, Section, Container, Tile } from '../components/Grid';
import { set } from 'mongoose';
import API from '../utils/API';

function Search() {

    const [selectOptions, setSelectOptions] = useState(['Keyword', 'Author', 'Title', 'Subject']);
    const [selectValue, setSelectValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    let [query, setQuery] = useState('');

    // useEffect( () => { 

    //     setSelectOptions(['Search Options', 'Author', 'Title', 'Subject']);

    // }, [selectOptions])


function handleInputValueChange (event) {

    setInputValue(event.target.value);
    console.log(inputValue);
    }

function handleSelectValueChange(event) {
        
        setSelectValue(event.target.value);
        console.log(selectValue);
    }

function handleSearchSubmit () {

    // const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
    API.searchGoogleBooks(selectValue, inputValue)
        .then(respObj => {
            console.log(respObj)
        })
        .catch(err => console.log(err))
    
}

    return (
        <div>
        
        <Section classes={'section'}>
            <Container fluid={true}>
                <Tile ancestor={true}>
                    <Tile parent={true} customClass={'is-10 is-center'}>
                        <Tile parent={false} customClass={'is-2 is-center'}>
                            <Select selectChange={handleSelectValueChange} selectSearch={selectValue}>
                                {
                                    selectOptions.map((value, index) => {
                                        return <Option key={index} value={value}> {value} </Option>
                                    })
                                }
                            </Select>
                        </Tile>
                        <Tile parent={false} customClass={'is-8 is-center'}>
                            <Input
                                inputColor='is-success'
                                inputSize='is-medium'
                                inputPlaceholder='Input search text here'
                                selectSearch={handleInputValueChange}
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
                <Tile>
                    <p>
                        where book result go
                    </p>
                </Tile>
            </Container>
        </Section>
        </div>
    )
}

export default Search;