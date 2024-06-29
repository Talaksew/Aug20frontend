import React from 'react';
import './navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                
                <h1>African Talent Network</h1>
            </div>
            <div className="navbar__center">
                <input type="text" placeholder="Search ... " />
                <SearchIcon />
            </div>
            <div className="navbar__right">
                {/* <p>Become a host</p>
                <LanguageIcon /> */}
                <div className="navbar__profile">
                    <AccountCircleIcon />
                </div>
                <MenuIcon />
            </div>
        </div>
    );
}

export default Navbar;
