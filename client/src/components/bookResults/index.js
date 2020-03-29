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
                            <Tile ancestor={true} customClass={'notification is-dark bookItem has-text-centered'} key={book.googleID}>
                                <Tile parent={true} vertical={false} customClass={''} >
                                    <Tile parent={false} customClass={'figure notification is-warning is-2 image is-1by2'}>
                                        <figure className='tile is-child'>
                                            <img src={book.image} href={book.link} alt='Book Cover'></img>
                                        </figure>
                                    </Tile>
                                    <Tile parent={false} customClass={'is-10 notification is-link'}>
                                        <Tile parent={true} vertical={false} customClass={'has-text-centered'}>
                                            <Tile parent={false} customClass={'is-8'}>
                                                <article className='has-text-centered'>
                                                    <div className='content'>
                                                        <h1>{book.title}</h1>
                                                        <h3>{!book.subtitle ? 'Enjoy the read!' : book.subtitle}</h3>
                                                        <p>Authors: {!book.authors ? ' No Authors Listed' : book.authors.toString()}</p>
                                                    </div>
                                                </article>
                                            </Tile>
                                            <Tile parent={false} customClass={'is-4 has-text-right'}>
                                                <Button href={book.link}>
                                                    View
                                                </Button>
                                                {props.saveOrDelete ?
                                                    <Button onClick={handleSaveBook} value={book.googleID}>
                                                        Save
                                                    </Button>
                                                    :
                                                    <Button onClick={handleDeleteBook} value={book._id}>
                                                        Delete
                                                    </Button>
                                                }
                                            </Tile>
                                        </Tile>
                                        <Tile parent={true} customClass={''}>
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
                        <Tile ancestor={true}>
                            <Tile parent={true}>
                                <Tile parent={false} customClass={'content'}>
                                    <p>
                                        No book results to display
                                    </p>
                                </Tile>
                            </Tile>
                        </Tile>
                    </Tile>
                }
            </Container>
        </Section>
    )

}

export default BookResults;