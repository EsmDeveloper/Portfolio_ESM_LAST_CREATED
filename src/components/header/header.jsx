import React, { useState, useEffect, useCallback, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ portfolioData }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);

  // Controle do scroll - SIMPLIFICADO
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Esconde header ao rolar para baixo (> 50px)
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsHidden(true);
    } 
    // Mostra header ao rolar para cima
    else if (currentScrollY < lastScrollY) {
      setIsHidden(false);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  return (
    <header 
      ref={headerRef}
      className={`app-header ${isHidden ? 'header-hidden' : ''}`}
    >
      <div className="header-content">
        {/* Cabeçalho principal */}
        <div className="header-main">
          <div className="header-identity">
            <h1 className="name">{portfolioData.name}</h1>
            <div className="title-wrapper">
              <p className="title">{portfolioData.title}</p>
            </div>
          </div>
        </div>

        {/* Navegação simples e proporcional */}
        <nav className="header-nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
            end
          >
            About
          </NavLink>
          <NavLink 
            to="/experience" 
            className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
          >
            Experience
          </NavLink>
          <NavLink 
            to="/clients" 
            className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
          >
            Clients
          </NavLink>
          <NavLink 
            to="/skills" 
            className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
          >
            Skills
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
          >
            Contact
          </NavLink>
          <NavLink 
            to="/estagio" 
            className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}
          >
            Estágio
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;