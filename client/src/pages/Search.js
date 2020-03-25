import React, { useState, useEffect } from 'react';
import { Input, Select, Option } from '../components/SearchBar'
import { Col, Section, Container, Tile } from '../components/Grid';

function Search() {

    const [selectOptions, setSelectOptions] = useState(['Search Options', 'Author', 'Title', 'Subject']);

    // useEffect( () => { 

    //     setSelectOptions(['Search Options', 'Author', 'Title', 'Subject']);

    // }, [selectOptions])


    return (

        <Section classes={'section'}>
            <Container fluid={true}>
                <Tile ancestor={true}>
                    <Tile parent={true} customClass={'is-10 is-center'}>
                        <Tile parent={false} customClass={'is-2 is-center'}>
                            <Select>
                                {
                                    selectOptions.map((value, index) => {
                                        console.log(value);
                                        return <Option key={index}> {value} </Option>
                                    })
                                }
                            </Select>
                        </Tile>
                        <Tile parent={false} customClass={'is-8 is-center'}>
                            <Input
                                inputColor='is-success'
                                inputSize='is-medium'
                                inputPlaceholder='Input search text here'
                            >
                            </Input>
                        </Tile>
                    </Tile>
                </Tile>
            </Container>
        </Section >

    )
}

export default Search;