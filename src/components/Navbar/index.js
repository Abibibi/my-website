import React, { useRef } from 'react';

import './navbar.scss';
import GitHub from 'src/styles/assets/images/github_navbar.png';
import LinkedIn from 'src/styles/assets/images/linkedin_navbar.png';
import Contact from 'src/styles/assets/images/contact_navbar.png';

const Navbar = () => {
  const burger = useRef(null);
  const nav = useRef(null);

  const handleResponsiveMenu = () => {
    nav.current.classList.toggle('navbar-nav-burger-active');
  };

  return (
    <div className="navbar">
      <a className="navbar-website-name" href="#">A.</a>
      <nav className="navbar-nav">
        <ul className="navbar-nav-links" ref={nav}>
          <li className="navbar-nav-links-link">
            <a
              className="navbar-nav-links-link-onelink"
              href="https://github.com/Abibibi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="navbar-nav-links-link-onelink-logo"
                src={GitHub}
                alt="Logo Github"
              />
            </a>
          </li>
          <li className="navbar-nav-links-link">
            <a
              className="navbar-nav-links-link-onelink"
              href="https://www.linkedin.com/in/abebangwe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="navbar-nav-links-link-onelink-logo"
                src={LinkedIn}
                alt="Logo LinkedIn"
              />
            </a>
          </li>
          <li className="navbar-nav-links-link">
            <a
              className="navbar-nav-links-link-onelink"
              href="mailto:abeba.ngwe@gmail.com?Subject=Prise de contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="navbar-nav-links-link-onelink-logo"
                src={Contact}
                alt="Contact"
              />
            </a>
          </li>
        </ul>
        <div className="navbar-nav-burger" ref={burger} onClick={handleResponsiveMenu}>
          <div className="navbar-nav-burger-line navbar-nav-burger-line1" />
          <div className="navbar-nav-burger-line navbar-nav-burger-line2" />
          <div className="navbar-nav-burger-line navbar-nav-burger-line3" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
