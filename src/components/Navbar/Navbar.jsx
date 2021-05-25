//modules
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//components
import { ReactComponent as MenuIcon } from '../../assets/icons/menuIcon.svg';

//files
import './Navbar.scss';

function Navbar({ active }) {

    let [displayingMobileNav, setDisplayingMobileNav] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 0){
                document.getElementById("navbar").style.boxShadow = "0px 0.2px 10px rgba(0, 0, 0, 0.25)"
            }else{
                document.getElementById("navbar").style.boxShadow = "none"
            }
        });

        // returned function will be called on component unmount 
        return () => {
            window.removeEventListener('scroll', () => {})
        }
    }, [])

    return (
        <nav 
            className="navbar"
            id="navbar"
        >
            <h2 className="navbar__logo">Aidan Tilgner</h2>
            <MenuIcon 
                className="navbar__menu-icon"
                onClick={(e) => {
                    e.preventDefault();

                    let navItems = document.getElementById('nav-items');

                    if(
                        !displayingMobileNav
                    ){
                        console.log('was none')

                        document.getElementById('nav-items').style.display = "flex"

                        setDisplayingMobileNav(!displayingMobileNav)
                    }else if(
                        displayingMobileNav
                    ){
                        console.log('was flex')

                        document.getElementById('nav-items').style.display = "none";

                        setDisplayingMobileNav(!displayingMobileNav);
                    }
                }}
            />
            <ul className="navbar__nav-items" id="nav-items">
                <li className="navbar__nav-item">
                    <Link 
                        to="/home" 
                        className="navbar__nav-link"
                        style={
                            {borderBottom: active === "home" && "2px solid #E4B958"}
                        }
                    >home</Link>
                </li>
                <li className="navbar__nav-item">
                    <Link 
                        to="/about" 
                        className="navbar__nav-link"
                        style={
                            {borderBottom: active === "about" && "2px solid #E4B958"}
                        }
                    >about</Link>
                </li>
                <li className="navbar__nav-item">
                    <Link 
                        to="/portfolio"
                        className="navbar__nav-link"
                        style={
                            {borderBottom: active === "portfolio" && "2px solid #E4B958"}
                        }
                    >portfolio</Link>
                </li>
                <li className="navbar__nav-item">
                    <Link 
                        to="/resume" 
                        className="navbar__nav-link"
                        style={
                            {borderBottom: active === "resume" && "2px solid #E4B958"}
                        }
                    >resume</Link>
                </li>
                <li className="navbar__nav-item">
                    <Link 
                        to="/contact" 
                        className="navbar__nav-link"
                        style={
                            {borderBottom: active === "contact" && "2px solid #E4B958"}
                        }
                    >contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
