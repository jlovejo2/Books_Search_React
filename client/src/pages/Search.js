import React, { useState, useEffect } from 'react';
import { Input, Select, Option } from '../components/SearchBar'
import { Col, Section, Container, Tile } from '../components/Grid';
// import { set } from 'mongoose';
import API from '../utils/API';

function Search() {

    const [selectOptions, setSelectOptions] = useState(['Keyword', 'Author', 'Title', 'Subject']);
    const [selectValue, setSelectValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [apiBooks, setApiBooks] = useState([]);

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

    API.searchGoogleBooks(selectValue, inputValue)
        .then(respObj => {
            setApiBooks(respObj.data);
            console.log(respObj);
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
                { apiBooks.length ? 
                <Tile ancestor={true}>
                    <Tile parent={true} vertical={true}>
                        <article className='tile'>
                            <div className='content'>
                                <img src={apiBooks[0].image} href={apiBooks[0].link} alt='Book Image'></img>
                            </div>
                        </article>
                    </Tile>
                    <Tile parent={true}>
                        <Tile parent={false}>
                            <article className='tile'>
                                <div className='content'>
                                    <h1>{apiBooks[0].title}</h1>
                                    <h3>{!apiBooks[0].subtitle ? '' : apiBooks[0].subtitle }</h3>
                                    <p>{apiBooks[0].authors.toString()}</p>
                                </div>
                            </article>
                        </Tile>
                        <Tile parent={false}>
                            <article className ='tile'>
                                <div className='content'>
                                    <p>{apiBooks[0].preview}</p>
                                </div>
                            </article>
                        </Tile>
                    </Tile> 
                </Tile> : 
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