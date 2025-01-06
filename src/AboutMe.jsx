import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutMe.css';

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <div className="about-me-container">
      <h1 className="about-me-title">About Me</h1>
      <div className="about-me-content">
        <div className="profile-section">
          <img 
            src="/path/to/your/image.jpg" 
            alt="Profile" 
            className="profile-image"
          />
          <h2 className="name">Your Name</h2>
          <p className="title">Your Title/Role</p>
        </div>
        
        <div className="bio-section">
          <p>
            Hello! I'm a passionate developer with experience in web development.
            I love creating user-friendly applications and learning new technologies.
          </p>
        </div>

        <div className="skills-section">
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Node.js</li>
          </ul>
        </div>

        <div className="contact-button-container">
          <button 
            className="hire-me-button"
            onClick={() => navigate('/contact-us')}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 