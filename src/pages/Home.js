import React from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import challenges from '../assets/challenges.jpg'; 
import business from '../assets/business.jpeg'; 
import skills from '../assets/skills.png'; 
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Connect with real-world projects.</h2>
          <p>Don't wait, create your account now!</p>
          <Link to="/register">
            <button className="get-started-btn">Get Started</button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <img src={challenges} alt="Feature 1" />
          <p>Gain hands-on experience with real-world IT challenges</p>
        </div>
        <div className="feature">
          <img src={business} alt="Feature 2" />
          <p>Work in teams to solve real business problems</p>
        </div>
        <div className="feature">
          <img src={skills} alt="Feature 3" />
          <p>Projects tailored to your skills and career goals</p>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="learn-more">
        <div className="learn-more-card">
          <h3>STUDENTS</h3>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="learn-more-card">
          <h3>COMPANIES</h3>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
