import React, { useRef } from "react";

import "./navbar.scss";
import hideMobileMenu from "src/utils/hideMobileMenu";

const Navbar = () => {
  const burger = useRef(null);
  const nav = useRef(null);

  const handleResponsiveMenu = () => {
    nav.current.classList.toggle("navbar-nav-links-active");
  };

  const handleClick = (event) => {
    if (event.target.textContent === "Vidéos") {
      window.scrollTo({
        top: document.querySelector(".videos").offsetTop,
        behavior: "smooth",
      });
    } else if (event.target.textContent === "Contact") {
      window.scrollTo({
        top: document.querySelector(".form").offsetTop,
        behavior: "smooth",
      });
    } else if (event.target.textContent === "Abeba NGWE") {
      window.scrollTo({
        top: document.querySelector(".header").offsetTop,
        behavior: "smooth",
      });
    }
    hideMobileMenu();
  };

  return (
    <div className="navbar">
      <h1>
        <a className="navbar-website-name fade" onClick={handleClick}>
          Abeba NGWE
        </a>
      </h1>
      <nav className="navbar-nav">
        <ul className="navbar-nav-links fade" ref={nav}>
          <li className="navbar-nav-links-link" onClick={handleClick}>
            <a className="navbar-nav-links-link-onelink">Vidéos</a>
          </li>
          <li className="navbar-nav-links-link" onClick={handleClick}>
            <a className="navbar-nav-links-link-onelink">Contact</a>
          </li>
        </ul>
        <div
          className="navbar-nav-burger fade"
          ref={burger}
          onClick={handleResponsiveMenu}
        >
          <div className="navbar-nav-burger-line navbar-nav-burger-line1" />
          <div className="navbar-nav-burger-line navbar-nav-burger-line2" />
          <div className="navbar-nav-burger-line navbar-nav-burger-line3" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
