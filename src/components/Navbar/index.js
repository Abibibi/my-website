import React, { useEffect, useRef } from 'react';

import './navbar.scss';

const Navbar = () => {
  const burger = useRef(null);
  const nav = useRef(null);

  // to make sure burger menu is not displayed
  // when component is first mounted,
  // but only on click
  useEffect(() => {
    nav.current.classList.remove('navbar-nav-links-active');
  });

  const handleResponsiveMenu = () => {
    nav.current.classList.toggle('navbar-nav-links-active');
  };

  return (
    <div className="navbar">
      <a className="navbar-website-name" href="#">A.</a>
      <nav className="navbar-nav">
        <ul className="navbar-nav-links" ref={nav}>
          <li className="navbar-nav-links-link">
            <a
              className="navbar-nav-links-link-onelink"
            >
              Projets
            </a>
          </li>
          <li className="navbar-nav-links-link">
            <a
              className="navbar-nav-links-link-onelink"
              href="mailto:abeba.ngwe@gmail.com?Subject=Prise de contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
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
