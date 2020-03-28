import React, { useState, useEffect } from 'react';
// import { Input, Select, Option } from '../components/SearchBar'
import { Section, Container, Tile } from '../components/Grid';
import API from '../utils/API';

function Saved() {


    const [savedBooks, setSavedBooks] = useState([])


    useEffect(() => {
        getSavedBooks()
        console.log(setSavedBooks);
    }, [])

    function getSavedBooks() {

        API.findAllSavedBooks()
            .then(resp => {
            console.log(resp.data)
            setSavedBooks(resp.data);
            })
            .catch(err => console.log(err))
    }

    function handleSaveBook() {

    }

        return (
            <div>
                <Section class={'section'}>
                    <Container fluid={'true'}>
                        {savedBooks.length ?
                            savedBooks.map(book => {
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
                                                        <button className='button tileButton' onClick={handleSaveBook} value={book.googleID}>
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

export default Saved;