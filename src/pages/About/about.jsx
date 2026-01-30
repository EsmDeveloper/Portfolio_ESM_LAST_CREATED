// src/pages/About/About.jsx
import React from 'react';

import portfolioData from '../../data/portfolioData';

const About = () => {
  return (
    <section className="section about-section">
      <div className="about-grid">
        <div className="about-left">
          <div className="profile-image-container">
            <img src="/images/hero.png" alt="Esménio Manuel" className="profile-image" />
            <div className="profile-placeholder">
              <div className="placeholder-content">
                <div className="placeholder-icon">ESM</div>
              </div>
            </div>
          </div>            
        </div>
        
        <div className="about-right">
          <div className="intro-card">
            <h2 className="section-title">Engineering Mindset</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">{portfolioData.stats.clients}</span>
                <span className="stat-label">Clients</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">{portfolioData.stats.years}</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">∞</span>
                <span className="stat-label">Creative Ideas</span>
              </div>
            </div>
            
            <div className="description-box">
              <p className="description-text">{portfolioData.description}</p>
            </div>
            
            <div className="education-box">
              <h4>Education</h4>
              <p>{portfolioData.education}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;