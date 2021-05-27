//modules
import React from 'react';
import { Link } from 'react-router-dom';

//components
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import soapboxPreview from '../../assets/images/soapbox-preview.jpg';
import inStockPreview from '../../assets/images/inStock-preview.jpg';
import brainflixPreview from '../../assets/images/brainflix-preview.jpg';

//files
import './Home.scss'

function Home() {

    return (
        <div>
            <Navbar active="home"/>
            <div className="hero">
                <h1 className="hero__text">
                    let's make something great together
                </h1>
                <div className="hero__buttons">
                    <Link to="/resume">
                        <button className="hero__button-filled">
                            looking to hire
                        </button>
                    </Link>
                    
                    <Link to="/contact">
                        <button className="hero__button-outlined">
                            contact me
                        </button>
                    </Link>
                </div>
            </div>
            <div className="skills">
                <h2 className="skills__subheader">
                    here are some of my skills
                </h2>
                <div className="skills__skill-container">
                    <a href="https://www.geeksforgeeks.org/mern-stack/" className="link">
                        <h3 className="skills__skill-name">
                            MERN Stack
                        </h3>
                    </a>
                    <p className="skills__skill-description">
                        MERN stands for MongoDB, Express, React, Node. This is my go-to tech stack.
                    </p>
                </div>
                <div className="skills__skill-container">
                    <a href="https://reactjs.org/" className="link">
                        <h3 className="skills__skill-name">
                            ReactJS
                        </h3>
                    <p className="skills__skill-description">
                        I have made most of my projects using React including this website itself. 
                    </p>
                    </a>
                </div>
                <div className="skills__skill-container">
                    <a href="https://nodejs.org/en/" className="link">
                        <h3 className="skills__skill-name">
                            NodeJS
                        </h3>
                    </a>
                    <p className="skills__skill-description">
                        React and Node go very well together, and thus I have experience using node and it’s respective modules to further my project functionality and work flow.
                    </p>
                </div>
                <div className="skills__skill-container">
                    <a href="https://expressjs.com/" className="link">
                        <h3 className="skills__skill-name">
                            ExpressJS
                        </h3>
                    </a>
                    <p className="skills__skill-description">
                        I have experience using Express to make API’s as well as apply back-end functionality to my projects.
                    </p>
                </div>
                <div className="skills__skill-container">
                    <a href="https://www.mongodb.com/" className="link">
                        <h3 className="skills__skill-name">
                            MongoDB
                        </h3>
                    </a>
                    <p className="skills__skill-description">
                        I’ve used MongoDB as well as GridFS to apply file uploads to a project of mine called Soapbox
                    </p>
                </div>
                
                <Link to="/resume">
                    <button className="skills__button-filled">
                        see more
                    </button>
                </Link>
            </div>
            <div className="projects">
                <h2 className="projects__subheader">
                    here are some things I made
                </h2>
                <div className="projects__card">
                    <img src={soapboxPreview} alt="project preview" className="projects__preview"/>
                    <h3 className="projects__project-name">Soapbox</h3>
                    <p className="projects__project-description">
                        As my final project at BrainStation, 
                        I made a social media site for sharing essays on controversial topics.
                    </p>
                    <Link to="/portfolio/#soapbox">
                        <button className="projects__button-outlined">
                            see full description
                        </button>
                    </Link>
                </div>
                <div className="projects__card">
                    <img src={inStockPreview} alt="project preview" className="projects__preview"/>
                    <h3 className="projects__project-name">InStock</h3>
                    <p className="projects__project-description">
                        This was a collaboritive project between me and 
                        3 other people. It was our first time using SCRUM 
                        methodology and Jira software to collaborate.                    </p>
                    <Link to="/portfolio/#inStock">
                        <button className="projects__button-outlined">
                            see full description
                        </button>
                    </Link>
                </div>
                <div className="projects__card">
                    <img src={brainflixPreview} alt="project preview" className="projects__preview"/>
                    <h3 className="projects__project-name">Brainflix</h3>
                    <p className="projects__project-description">
                        This was the first time I made a proper API paired with a front-end, 
                        a full-stack web app. It's a video sharing app with dynamic data.
                    </p>
                    <Link to="/portfolio/#brainflix">
                        <button className="projects__button-outlined">
                            see full description
                        </button>
                    </Link>
                </div>
                <Link to="/portfolio">
                    <button className="projects__button-filled">
                        see all projects
                    </button>
                </Link>
            </div>
            <div className="about">
                <h2 className="about__subheader">
                    here's a bit about me
                </h2>
                <p className="about__description">
                    My name's Aidan. I'm a full-stack web developer based in Salem, Oregon.
                    My whole life I've loved building things and web development lets
                    me do that. I also love working with people and making a difference in 
                    the world around me. This has lead me to pursue long lasting relationships, and engaging and 
                    staying up to date with political issues in the United States as well as the 
                    rest of the world. I'm very passionate about my beliefs but don't worry
                    I'm not the kind of person who likes to start fights.
                </p>
                <p className="about__description">
                    I also love music, I'm a guitarist and I listen to pretty much all kinds of music.
                    Whether it be folk, classic rock, indie, classical, movie scores, you name it, I 
                    probably have a few songs saved. I like to consider myself a very creative person, 
                    as well as very driven in what I do. I love to learn, I like to listen to educational
                    podcasts, watch video essays, and read articles. I like to consider myself a fast
                    learner. I hope to learn more about UX Design and Digital Marketting in order to 
                    someday be the best freelance Web Developer I can be.
                </p>
                <Link to="/about">
                    <button className="about__button-filled">
                        more about me
                    </button>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
