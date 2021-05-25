//modules
import React from 'react';
import { Link } from 'react-router-dom';

//components
import Navbar from "../../components/Navbar/Navbar";

//files
import "./Portfolio.scss"

function Porfolio() {
    return (
        <div className="portfolioPage">
            <Navbar active="portfolio"/>
            <h1 className="portfolioPage__tagline">
                this area is under construction, give me a couple days :)
            </h1>
            <Link to="/home">
                    <button className="portfolioPage__button-filled">
                        return to home
                    </button>
            </Link>
        </div>
    )
}

export default Porfolio
