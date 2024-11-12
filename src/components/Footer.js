import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import InnotechLogo from '../assets/InnotechLogo.png'; 

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <img src={InnotechLogo} alt="Innotech Logo" />
      </div>
      <ul className="footer-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/terms">Terms and Policies</Link></li>
      </ul>
      <div className="footer-contact">
        <p>GOT A QUESTION?</p>
        <a href="mailto:innotech@email.com">innotech@email.com</a>
      </div>
      <div className="footer-social">
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://facebook.com"><FaFacebook /></a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>Innotech 2024 ©</p>
    </div>
  </footer>
);

export default Footer;
