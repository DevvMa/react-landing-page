import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Devva Maulana</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">
                    About
                    </a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">
                    Skill
                    </a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">
                    Portfolio
                    </a>
                </li>
            </ul>
            <div className="footer__social">
            <a href="https://www.instagram.com/devvma/" rel='noreferrer' className="footer__social-link" target='_blank'>
                <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://github.com/devvma" rel='noreferrer' className="footer__social-link" target='_blank'>
                <i className="bx bxl-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/devvma/" className="footer__social-link" rel='noreferrer' target='_blank'>
                <i className='bx bxl-linkedin-square'></i>
            </a>
            </div>
            <span className="footer__copy">
                &#169; DevvaMaulana. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer