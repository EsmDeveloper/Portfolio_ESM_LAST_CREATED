// src/pages/Clients/Clients.jsx
import React from 'react';

import portfolioData from '../../data/portfolioData';

const Clients = () => {
  return (
    <section className="section clients-section">
      <div className="section-header">
        <h2 className="section-title">Mega Clients</h2>
        <p className="section-subtitle">Brands I've had the privilege to work with</p>
      </div>
      
      <div className="clients-grid">
        {portfolioData.clients.map((client, index) => (
          <div key={index} className="client-card">
            <span className="client-name">{client}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;