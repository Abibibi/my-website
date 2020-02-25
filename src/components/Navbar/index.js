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

  const handleClick = (event) => {
    if (event.target.textContent === 'Projets') {
      window.scrollTo({
        top: document.querySelector('.projects').offsetTop,
        behavior: 'smooth',
      });
    }
    else if (event.target.textContent === 'Contact') {
      window.scrollTo({
        top: document.querySelector('.form').offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="navbar">
      <a className="navbar-website-name" href="#">A.</a>
      <nav className="navbar-nav">
        <ul className="navbar-nav-links" ref={nav}>
          <li className="navbar-nav-links-link" onClick={handleClick}>
            <a
              className="navbar-nav-links-link-onelink"
            >
              Projets
            </a>
          </li>
          <li className="navbar-nav-links-link" onClick={handleClick}>
            <a
              className="navbar-nav-links-link-onelink"
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
