//modules
import React from 'react';
import { Link } from 'react-router-dom';

//components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProjectShowcase from "../../components/ProjectShowcase/ProjectShowcase";

//files
import "./Portfolio.scss"

function Porfolio() {
    return (
        <>
        <div className="portfolioPage">
            <Navbar active="portfolio"/>
            <h1 className="portfolioPage__tagline">
                Here's a taste of what I can do
            </h1>
            <ProjectShowcase
                title={"dummy"}
                description={"dummy"}
                technologies={"dummy"}
                previewImage={false}
                projectLink={"dummy"}
            />
            <ProjectShowcase/>
            
        </div>
        <Footer/>
        </>
    )
}

export default Porfolio
