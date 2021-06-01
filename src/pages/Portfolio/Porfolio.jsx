//modules
import React from 'react';
import { Link } from 'react-router-dom';

//components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProjectShowcase from "../../components/ProjectShowcase/ProjectShowcase";
import soapboxPreview from "../../assets/images/soapbox-preview.jpg";
import brainflixPreview from "../../assets/images/brainflix-preview.jpg";
import inStockPreview from "../../assets/images/inStock-preview.jpg";
import bandsitePreview from "../../assets/images/bandsite-preview.jpg";

//files
import "./Portfolio.scss";

function Porfolio() {
    return (
        <>
        <div className="portfolioPage">
            <Navbar active="portfolio"/>
            <h1 className="portfolioPage__tagline">
                here's a taste of what I can do
            </h1>
            <ProjectShowcase
                title={"soapbox"}
                description={
                    "Soapbox is a social media platform for open debate carried out via essays. " +
                    "User's can submit either a written or video essay on various topics."
                }
                technologies={"React.js, Node.js, Express.js, MongoDB, Multer, GridFS, Mongoose, Axios"}
                previewImage={soapboxPreview}
                projectLink={"https://github.com/AidanTilgner/tilgner-aidan-soapbox"}
            />
            <ProjectShowcase
                title={"brainflix"}
                description={
                    "Brainflix is a video sharing platform that uses a front-end to communicate with " +
                    "a back end. It is not fully functional but served as my introduction to building" +
                    "RESTful API's with Express."
                }
                technologies={"React.js, Node.js, Express.js, Axios"}
                previewImage={brainflixPreview}
                projectLink={"https://github.com/AidanTilgner/tilgner-aidan-brainflix"}
            />
            <ProjectShowcase 
                title="Instock"
                description={
                    "InStock was one of my first collaborative projects using the Scrum method. " +
                    "Me and a team of other developers used Jira software to create an interactive " +
                    "front-end for a database of warehouses and their inventories."
                }
                technologies={"React.js, Node.js, Express.js, Jira Software, Axios"}
                previewImage={inStockPreview}
                projectLink="https://github.com/cdd741/InStock"
            />
            <ProjectShowcase 
                title="bandsite"
                description={
                    "Bandsite is a general advertisment site for a fictional band to show off their work. " +
                    "This was my first time using javascript DOM manipulation and pulling from an " +
                    "external API."
                }
                technologies="HTML5, CSS3, Javascript (ES6), Axios"
                previewImage={bandsitePreview}
                projectLink="https://github.com/AidanTilgner/tilgner-aidan-bandsite"
            />
        </div>
        <Footer/>
        </>
    )
}

export default Porfolio
