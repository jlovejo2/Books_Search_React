import React from "react";

function Nav(props) {
    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item is-paddingless" href="https://books.google.com/">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Google_Books_logo_2015.svg/1200px-Google_Books_logo_2015.svg.png" alt="Google Books logo 2015.svg" width="100" height="100"></img>
                </a>
                    {/* This burger menu will grab everything in the nav-bar menu class anda place it into a burger button */}
                <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" onClick={props.burgerMenu}>
                    {/* These 3 empty span tags are required to create the three lines in the burger menu that shows up when screen size is reduced */}
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>
            {/* This is a Bulma class that specifies what is in the navbar menu.  It allows for the responsiveness of items to be place in burger class above */}
            <div className={`navbar-menu ${props.burgerClass ? 'is-active' : ''}`}>
                {/* The navbar-start class is a Bulma class that aligns the nav-items in it to the left of the nav div on page.  Needs to exist even if its empty */}
                <div className="navbar-start">
                    <a className="navbar-item" href='/search'>
                        Search
                    </a>
                    <a className="navbar-item" href='/saved'>
                        Saved
                    </a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <div className="navbar-link">More</div>
                        <div className="navbar-dropdown">
                            <a className="navbar-item" href='/search'>About</a>
                            <a className="navbar-item" href='/search'>Jobs</a>
                            <a className="navbar-item" href='/saved'>Contact</a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item" href='/saved'>Report an issue</a>
                        </div>
                    </div>
                </div>
            {/* This navbar-end class is  Bulma class that will place the items on the far right of the navbar, needs to exist in nav-bar even if its empty */}
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <button className="button is-primary">
                                <strong>Sign up</strong>
                            </button>
                            <button className="button is-light">
                                Log in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
