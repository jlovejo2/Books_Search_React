import React, { useContext } from 'react';
import { Section, Container, Tile } from '../Grid';
import BooksContext from '../../utils/booksContext';
import Button from '../Button';

function BookResults(props) {

    const { apiBooks, handleSaveBook, handleDeleteBook } = useContext(BooksContext)

    return (
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
                                                <Button href={book.link}>
                                                    View
                                                </Button>
                                                {props.saveOrDelete ?
                                                    <Button onClick={handleSaveBook} value={book._id}>
                                                        Save
                                                    </Button>
                                                    :
                                                    <Button onClick={handleDeleteBook} value={book._id}>
                                                        Delete
                                                    </Button>
                                                }
                                            </Tile>
                                        </Tile>
                                        <Tile parent={true} customClass={'notification is-link'}>
                                            <article className='tile'>
                                                <div className='content'>
                                                    <p>{book.preview}</p>
                                                </div>
                                            </article>
                                        </Tile>
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
    )

}

export default BookResults;