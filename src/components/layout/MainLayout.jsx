// src/components/Layout/MainLayout.jsx
import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { Outlet } from 'react-router-dom';
import portfolioData from '../../data/portfolioData';

const MainLayout = () => {
  return (
    <div className="portfolio-app">
      <Header portfolioData={portfolioData} />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer portfolioData={portfolioData} />
    </div>
  );
};

export default MainLayout;