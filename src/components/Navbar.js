import React, { useState } from 'react';
import './Navbar.css';
import InnotechLogo from '../assets/InnotechLogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <img src={InnotechLogo} alt="Innotech Logo" />
        </div>
      </div>
      <div className={`navbar-links-container ${isOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#login">LOGIN</a></li>
        </ul>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button>→</button>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
