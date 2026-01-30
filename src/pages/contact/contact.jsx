// src/pages/Contact/Contact.jsx
import React from 'react';

import portfolioData from '../../data/portfolioData';

const Contact = () => {
  return (
    <section className="section contact-section">
      <div className="contact-grid">
        <div className="contact-info">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            Interested in collaborating or have a project in mind? 
            Feel free to reach out through any of the channels below.
          </p>
          
          <div className="contact-methods">
            <div className="method">
              <div className="method-icon"></div>
              <div className="method-details">
                <h4>Email</h4>
                <a href={`mailto:${portfolioData.contact.email}`} className="method-link">
                  {portfolioData.contact.email}
                </a>
              </div>
            </div>
            
            <div className="method">
              <div className="method-icon"></div>
              <div className="method-details">
                <h4>Phone</h4>
                <a href={`tel:${portfolioData.contact.phone}`} className="method-link">
                  {portfolioData.contact.phone}
                </a>
              </div>
            </div>
            
            <div className="method">
              <div className="method-icon"></div>
              <div className="method-details">
                <h4>Location</h4>
                <span className="method-text">{portfolioData.contact.location}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-action">
          <div className="action-card">
            <h3>Ready to create something amazing?</h3>
            <p>Let's discuss your next project!</p>
            <div className="action-buttons">
              <a href="https://is.gd/esmenio" className="primary-button">
                Send Email
              </a>
              <a href="https://www.linkedin.com/in/esm-manuel/" className="secondary-button">
                Call now on Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;