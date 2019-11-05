import React from 'react';
import './Header.css';

function Header() {
    return(
        <nav className="Nav">
            <div className="Nav-menus">
                <div className="Nav-brand">
                    <img class="Nav-brand-logo" src="https://image.flaticon.com/icons/svg/1409/1409946.svg"></img>
                    <a className="Nav-brand-text" href="/">
                        Instagram
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Header;