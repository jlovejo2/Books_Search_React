import React from 'react';
import Hero from '../components/Hero';
import {Tile} from '../components/Grid';


function Home(props) {

    return (
        <div>
            <Hero
                title='Google Books Search App (Using React)'
                subTitle='Search and Save books of interest'
            />
            <Tile ancestor={true}>
                <Tile parent={true}>
                    <div className='content'>
                        <p>
                            Welcome to the Google Search App.  This app is powered by the google books api and allows the user to search by Author, Title, Subject, or Keyword.
                            Want to give it a try?  Then click on the search tab.  The saved tab will display all the books that you choose to save for later referencing.  The more dropdown and sign-up, login buttons are not functioning at this time.
                    </p>
                    </div>
                </Tile>
            </Tile>
        </div>
    )


}

export default Home;