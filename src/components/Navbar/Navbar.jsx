//modules
import React from 'react';

//components
import { ReactComponent as MenuIcon } from '../../assets/icons/menuIcon.svg';

//files
import './Navbar.scss';

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="navbar__logo">Aidan Tilgner</h2>
            <MenuIcon className="navbar__menu-icon"/>
        </nav>
    )
}

export default Navbar
