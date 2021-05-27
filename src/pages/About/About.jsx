//modules
import React from 'react';
import { Link } from 'react-router-dom';

//components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

//files
import "./About.scss"

function About() {
    return (
        <div className="aboutPage">
            <Navbar active="about"/>
            <h1 className="aboutPage__tagline">
                this is me
            </h1>
            <div className="aboutPage__section" id="why-I-chose">
                <h2 className="aboutPage__subheader">
                    why I chose web development
                </h2>
                <p className="aboutPage__paragraph">
                    I’m the kind of person who loves to build things, 
                    as a kid that used to mean legos, but now that means 
                    websites. 
                </p>
                <p className="aboutPage__paragraph">
                    I applied for a Full-Time Web Development course at  
                    <a href="https://brainstation.io/" target="_blank" className="aboutPage__link">
                        BrainStation
                    </a>  
                    and got in. There, over a three month period I went from knowing 
                    basic HTML and CSS to full-stack web development with React, 
                    Node, Express, and many other industry standards. 
                </p>
                <p className="aboutPage__paragraph">
                    I still hold strong that I want to make Web Development my career 
                    and now I’m in the part of my journey where I find my first job. 
                    Who know’s yet where it will be but I’m excited to be building things, 
                    but now with code instead of legos.
                </p>
                <p className="aboutPage__paragraph">
                    For a long time I didn’t know what I wanted to do with my 
                    life, but eventually, after a short web design class in High School, 
                    I realized that making websites was something I’d be willing to 
                    do proffesionally, and after some research in the summer of 2020, it was settled. 
                </p>
            </div>
            <div className="aboutPage__section" id="ambitions">
                <h2 className="aboutPage__subheader">
                    my ambitions
                </h2>
                <p className="aboutPage__paragraph">
                    Throughout my life I've often asked myself what I wanted to do with 
                    my life, though a specific conclusion was always very hard to find.
                    Once I got into High School and took my first couple computer science 
                    classes I realized that I wanted to go into a computer science field.
                </p>
                <p className="aboutPage__paragraph">
                    When I looked into specific computer science fields that I may be
                    interested in it probably won't suprise you that I chose web development.
                    But even finding a specific career to pursue I still didn't have my question
                    answered. What do I want to do with my life?
                </p>
                <p className="aboutPage__paragraph">
                    However, over the course of the last few months, after diving
                    headfirst into the world of web development and all of it's possibilities,
                    tangents and opportunities, I've come to a more definitive solution. 
                </p>
                <p className="aboutPage__paragraph">
                    I want to help small companies get their foot into the digital world.
                    I want to be able to help people gain a web presence on a lower level 
                    than working for a big company. So as of right now I hope to start
                    actively freelancing within the next few years, both to grow my skills
                    and have the freedom to make my own space with my craft.
                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default About
