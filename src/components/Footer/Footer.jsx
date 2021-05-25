//modules
import React from 'react';

//components
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';

//files
import './Footer.scss';

function Footer() {
    return (
        <div className="footer">
            <h3 className="footer__title">My Social</h3>
            <div className="footer__social-icons">
                <a href="https://www.linkedin.com/in/aidan-tilgner-0a4a31157/" target="_blank">
                    <img src={linkedin} alt="linkedin" className="footer__icon"/>
                </a>
                <a href="https://github.com/AidanTilgner" target="_blank">
                    <img src={github} alt="github" className="footer__icon"/>
                </a>
                <a href="https://www.instagram.com/aidan.tilgner/" target="_blank">
                    <img src={instagram} alt="instagram" className="footer__icon"/>
                </a>
                <a href="https://www.facebook.com/aidan.tilgner" target="_blank">
                    <img src={facebook} alt="facebook" className="footer__icon"/>
                </a>
            </div>
            <p className="footer__copyright">
                Copyright © 2021 Aidan Tilgner
            </p>
            <p className="footer__copyright">
                All Rights Reserved
            </p>
        </div>
    )
}

export default Footer
