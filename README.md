# Books_Search_React
this app allows user to search google books api and then save their liked books

the link to github is shown below:
https://github.com/jlovejo2/Books_Search_React.git

the link to the functional app is shown below:
https://google-books-react-jlovejo2.herokuapp.com/

## Table of Contents
* [User Story](#user-story)
* [Version 1.0](#version-1.0)
* [How To Use](#how-to-use)
* [Coding Languages Used](#coding-languages-used)
* [NPMs Used](#npms-used)
* [CSS Framework](#css-framework)
* [Structure of Code and Functions](#structure-of-code-and-functions)
* [Known Issues With Code](#known-issues-with-code)

## User Story
As a user I want a way to search the google books api for books that I'd like to read based on multiple criteria.  This app allows the user to search based on subject, keyword, title, or author.

## Version 1.0
* This google-books-react app runs via heroku or by entering the command "npm start" to initialize the react server.
* Make sure you are in the main folder when running the code on the command line.
* This app does have three pages a "Home", "Search" and "Saved" page.  There are other options on navbar but these were there to just get used to bulma navbar layout and at this time don't link anywhere.
*  The search page searches the google books api for books based on search criteria.  Options are in the select dropdown.

## How To Use
See the layout of the app below.

- STEP 1: The home page of the app has little description explaining what the app can be used for.  There are only three tabs that link to pages. Green box is the google books logo which will take the user to the google books site.  The blue box will render the search bar onto the page.  The red box will render the saved books onto the page.

!["Starting page of App"](/client/public/assets/images/readme/home-page.jpg ) 

- If the user chooses to click on the search tab.  The objects in the green box will be rendered onto the page.  The actual search input will be typed into the search box in the center.  User will select one of these four types of searches
    - keyword 
    - Author
    - Title 
    - Subject
 When they are ready to search they will click on the Search button

!["Search Layout"](/client/public/assets/images/readme/Search.jpg ) 

- The rendered search results will appear onto the page as seen in image.  Each book has two buttons in upper right-hand corner.
    - "View" will take user to google books link for that book
    - "Save" will save the book to the database

!["Rendered Search Results"](/client/public/assets/images/readme/render-search.png ) 

- Clicking on the saved tab in the navbar will render all the saved books to the page.  Layout is identical to the searched books however one of the buttons has changed in upper right hand corner.  Shown in green box.  
    - "View" same as on search page
    - "Delete" will delete the book from the database

!["Example of Table Filter Results"](/client/public/assets/images/readme/saved.jpg) 


- The user is notified on both completed book save and book delete

Modal that Renders on Saved Book                                        |  Modal that Renders on Delete Book
:----------------------------------------------------------------------:|:--------------------------------------------------------------------:
!["Saved Modal"](/client/public/assets/images/readme/save-modal.png ) |  !["Delete Modal"](/client/public/assets/images/readme/delete-modal.png )

## Coding Languages Used
* HTML
* CSS
* Javascript
* React.js
* JSX
* Node.js

## NPMs Used:
* NPM axios
* NPM mongoose
* NPM react
* NPM react-dom
* NPM react-router-dom
* NPM react-scripts
* NPM nodemon
* NPM concurrently
* NPM bulma
* NPM if-env
* NPM dotenv

## CSS Framework:
* Bulma

## Structure of Code and Functions
# Front-End - Client folder
* public folder
    - index.html - with react does not contain much code but necessary library links like for bulma.  It interacts with App.js
* src folder - this is the meat of react and holds most of the front-end code
    - components folder - all the html components that require some custom props and CSS have their own folder in component with an index.js file in it and style.css file if necessary
        - bookResults
            - this component contains the JSX that is used to render the book results to the page.  It is used by both Search and Saved pages
        - button
        - footer
        - Grid
            - this component contains functions for components use to create bulma layouts such as Col, Section, Container, and Tile
        - Hero - bulmas version of jumbotron
        - Modal
        - Nav
            - this component contains the code for the navbar.  Also contains functionality for the burger menu
        - SearchBar
            - this component contains the select option, input, and determines props of search button on search page 
    - pages folder - contains the actual pages for the App
        - Home.js - this is the homepage for the app.  Only has some text on it as of now.
        - Saved.js - this page is rendered onto home page.  It renders all the saved books onto the apge
        - Search.js - this page renders the select, input, and search buttons onto the page.  Then when search is executed it renders the returned results onto the page
# Back-end
* Controllers folder
    - functions.js: this file contains a custom function used to validate if the response object brought back from google books api has a valid image link in it.  If not it just places a generic text string so object can be sent to front-end.
    - googleBooksController.js: This file receives the search critieria sent from the front-end.  It assembles the proper query and then makes request to google books api.  Upon receiving response object back it takes what it wants out of and saves it to new object which it sends to the front-end
    - savedBooksController.js: This file contains the four functions use to interact with the savedBooks Schema in database
        - findById, create, delete, findAll
* models folder
    - index.js
    - savedBook.js: this file creates the schema for the saved books in mongo
* routes folder
    - index.js: this file handles the first level of the routes and sends them either to the googleBooksController, apiFolder, or the React App
    - api folder
        - index.js: this file isn't super necessary for the few calls I have.  However, it is set-up to direct api routes to specific files.  This files directs all "/savedBook" routes to savedBook.js
        -savedBooks.js: breaks the routes down further into 2 types "/" and "/:id" then calls the appropriate controller functions for them
* server.js - where the back-end magic starts

## Known Issues With Code
* If user navigates back to search page from saved page with back arrow the old search is still in the input
* if user clicks on search button in this case it does not perform the search
* most of the tabs on the navbar do not have functionality to them

