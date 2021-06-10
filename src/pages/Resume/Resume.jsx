//modules
import React from 'react';

//components
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

//files
import './Resume.scss';
import resume from '../../assets/files/aidan-tilgner-resume.pdf';

function Resume() {
    return (
        <div className="resume">
            <Navbar active="resume"/>
            <div className="resume__hero">
                <h1 className="resume__tagline">
                    what I may lack in experience, I 
                    make up for in my drive to learn
                </h1>
                <a href={resume} download="aidan-tilgner-resume">
                    <button className="resume__button-filled">
                        download resume
                    </button>
                </a>
            </div>
            
        </div>
    )
}

export default Resume
