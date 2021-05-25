//modules
import React from 'react';

//components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

//files
import "./Contact.scss";

function Contact() {
    return (
        <>
            <div className="contactPage">
                <Navbar active="contact"/>
                <h1 className="contactPage__tagline">
                    let's get in touch!
                </h1>
                <h2 className="contactPage__subheader">
                    Here's My Number
                </h2>
                <p className="contactPage__info">
                    +1 503-200-7472
                </p>
                <h2 className="contactPage__subheader">
                    shoot me an email
                </h2>
                <a href="mailto:aidantilgner02@gmail.com" target="_blank">
                    <button className="contactPage__button-filled">
                        open inbox
                    </button>
                </a>
            </div>
            <Footer active="contact"/>
        </>
    )
}

export default Contact
