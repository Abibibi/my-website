import React from 'react';

import './navbar.scss';
import GitHub from 'src/styles/assets/images/github_navbar.png';
import LinkedIn from 'src/styles/assets/images/linkedin_navbar.png';
import Contact from 'src/styles/assets/images/contact_navbar.png';

const Navbar = () => (
  <div className="navbar">
    <a className="navbar-website-name" href="#">A.</a>
    <a className="navbar-website-responsivename" href="#">A.</a>
    <nav className="navbar-nav">
      <ul className="navbar-nav-links">
        <li className="navbar-nav-links-link">
          <a
            className="navbar-nav-links-link-onelink"
            href="https://github.com/Abibibi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="navbar-nav-links-link-onelink-github"
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
              className="navbar-nav-links-link-onelink-linkedin"
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
              className="navbar-nav-links-link-onelink-contact"
              src={Contact}
              alt="Contact"
            />
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
