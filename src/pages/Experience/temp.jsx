// src/pages/Experience/Experience.jsx
import React from 'react';

import portfolioData from '../../data/portfolioData';

const Experience = () => {
  return (
    <section className="section experience-section">
      <h2 className="section-title">Professional Journey</h2>
      
      <div className="journey-timeline">
        {portfolioData.journey.map((job, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="job-header">
                <h3 className="job-title">{job.title}</h3>
                <span className="job-period">{job.period}</span>
              </div>
              <div className="job-details">
                <p className="job-company">{job.company} • {job.location}</p>
                <p className="job-type">{job.type}</p>
                <p className="job-description">{job.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;