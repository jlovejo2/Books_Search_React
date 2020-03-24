import React from "react";

function Nav() {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item is-paddingless" href="https://books.google.com/">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Google_Books_logo_2015.svg/1200px-Google_Books_logo_2015.svg.png" alt="Google Books logo 2015.svg" alt="logo" width="100" height="100"></img>
                </a>

                <button role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                        Search
                        </a>

                    <a class="navbar-item">
                        Saved
                        </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            More
                            </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                About
                                </a>
                            <a class="navbar-item">
                                Jobs
                                </a>
                            <a class="navbar-item">
                                Contact
                                </a>
                            <hr class="navbar-divider" />
                            <a class="navbar-item">
                                Report an issue
                                    </a>
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
