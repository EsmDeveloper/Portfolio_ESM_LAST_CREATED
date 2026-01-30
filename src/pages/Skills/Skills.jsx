// src/pages/Skills/Skills.jsx
import React from 'react';

import portfolioData from '../../data/portfolioData';

const Skills = () => {
  return (
    <section className="section skills-section">
      <h2 className="section-title">Skills & Expertise</h2>
      
      <div className="skills-container">
        {portfolioData.skills.map((skill, index) => (
          <div key={index} className="skill-tag">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;