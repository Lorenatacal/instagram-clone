import React from 'react';
import './Header.css';

function Header() {
    return(
        <nav className="Nav">
            <div className="Nav-menus">
                <div className="Nav-brand">
                    <img className="Nav-brand-logo" href="/" src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-and-icon-black-and-white-text-glyph-png.png"></img>
                </div>
            </div>
        </nav>
    );
}

export default Header;