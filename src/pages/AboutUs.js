import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="container">
        <h1 className="title">About Us</h1>

        <div className="content-box">
          {/* Mission Section */}
          <div className="mission-section">
            <h2>Our Mission</h2>
            <p>
              Innotech Projects strives to bridge the gap between students and real-world IT projects. We empower Baruch College students to gain hands-on experience, develop their skills, and collaborate with companies to bring innovative ideas to life. Our mission is to create a platform that fosters growth, creativity, and valuable networking opportunities for students while providing companies with fresh perspectives and talent.
            </p>
          </div>

          {/* Features Section */}
          <div className="features-section">
            <h2>Features</h2>
            <ul>
              <li>Access to real-world IT projects from companies and startups.</li>
              <li>Opportunities to enhance your skills through hands-on experience.</li>
              <li>AI-powered matching system to connect students with projects suited to their skills and interests.</li>
              <li>Collaborative environment that encourages teamwork and creativity.</li>
              <li>Networking opportunities with professionals and companies.</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h2>Get Started with Innotech Projects</h2>
            <p>
              Join our platform today and start gaining practical experience that will set you apart in your career. Whether you are a student looking to expand your skill set or a company seeking fresh talent, Innotech Projects is the place to connect, collaborate, and grow.
            </p>
            <Link to="/Register">
              <button className="cta-button">Join Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

