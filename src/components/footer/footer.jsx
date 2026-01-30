// src/components/Footer/Footer.jsx
import React from 'react';


const Footer = ({ portfolioData }) => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Esménio Manuel - Técnico de Gestão Informática.
        </p>
      </div>
    </footer>
  );
};

export default Footer;