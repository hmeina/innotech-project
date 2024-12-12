import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/home">
            <img src={InnotechLogo} alt="Innotech Logo" />
          </Link>
        </div>
      </div>
      <div className={`navbar-links-container ${isOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
        <li><Link to="/aboutus">ABOUT</Link></li>
      <li><Link to="/projects">PROJECTS</Link></li>
      <li><Link to="/login">LOGIN</Link></li>
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
