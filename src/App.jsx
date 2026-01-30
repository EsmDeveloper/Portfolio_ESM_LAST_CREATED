// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

import About from './pages/About/about';
import Experience from './pages/Experience/Experience';
import Skills from './pages/Skills/Skills.jsx';
import Clients from './pages/Clients/Clients.jsx';
import Contact from './pages/contact/contact';
import PortfolioEstagio from './pages/estagio/estagio';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="skills" element={<Skills />} />
          <Route path="clients" element={<Clients />} />
          <Route path="contact" element={<Contact />} />
          <Route path="estagio" element={<PortfolioEstagio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;