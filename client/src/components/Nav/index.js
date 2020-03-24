import React from "react";

function Nav() {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item is-paddingless" href="https://books.google.com/">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Google_Books_logo_2015.svg/1200px-Google_Books_logo_2015.svg.png" alt="Google Books logo 2015.svg" alt="logo" width="100" height="100"></img>
                </a>
                    {/* This burger menu will grab everything in the nav-bar menu class anda place it into a burger button */}
                <button class="navbar-burger burger" aria-label="menu" aria-expanded="false">
                    {/* These 3 empty span tags are required to create the three lines in the burger menu that shows up when screen size is reduced */}
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>
            {/* This is a Bulma class that specifies what is in the navbar menu.  It allows for the responsiveness of items to be place in burger class above */}
            <div class="navbar-menu">
                {/* The navbar-start class is a Bulma class that aligns the nav-items in it to the left of the nav div on page.  Needs to exist even if its empty */}
                <div class="navbar-start">
                    <a class="navbar-item" href='/search'>
                        Search
                    </a>
                    <a class="navbar-item" href='/saved'>
                        Saved
                    </a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link" href=''>More</a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item" href=''>About</a>
                            <a class="navbar-item" href=''>Jobs</a>
                            <a class="navbar-item" href=''>Contact</a>
                            <hr class="navbar-divider" />
                            <a class="navbar-item" href=''>Report an issue</a>
                        </div>
                    </div>
                </div>
            {/* This navbar-end class is  Bulma class that will place the items on the far right of the navbar, needs to exist in nav-bar even if its empty */}
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <button class="button is-primary">
                                <strong>Sign up</strong>
                            </button>
                            <button class="button is-light">
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
