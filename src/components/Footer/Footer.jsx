import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footerSection">
    <div className="footerContent">
      <span className="footerTitle">Made by Mohit Singh</span>
      <div className="footerSocials">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer; 