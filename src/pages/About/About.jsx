//modules
import React from 'react';
import { Link } from 'react-router-dom';

//components
import Navbar from "../../components/Navbar/Navbar";

//files
import "./About.scss"

function About() {
    return (
        <div>
            <div className="aboutPage">
            <Navbar active="about"/>
            <h1 className="aboutPage__tagline">
                this area is under construction, give me a couple days :)
            </h1>
            <Link to="/home">
                    <button className="aboutPage__button-filled">
                        return to home
                    </button>
            </Link>
        </div>
        </div>
    )
}

export default About
