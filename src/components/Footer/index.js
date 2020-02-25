import React from 'react';

import './footer.scss';


const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-container-links">
        <p>
          <a
            href="https://github.com/Abibibi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/abebangwe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
      <div className="footer-container-copyright">
        <p>Abeba Ngwe - 2020 &#169;</p>
      </div>
    </div>
  </footer>
);

export default Footer;
