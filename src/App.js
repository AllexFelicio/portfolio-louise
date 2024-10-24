import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatisticsSection from './components/StatisticsSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection'; 
import AboutMeSection from './components/AboutMeSection'; 
import ServicesSection from './components/ServicesSection';
import GlobalTheme from './components/GlobalStyles'; 

function App() {
  return (
    <GlobalTheme>
      <div>
        <Header />
        <HeroSection id="hero" />
        <StatisticsSection id="statistics" />
        <AboutMeSection id="about" />
        <PortfolioSection id="portfolio" />
        <ServicesSection id="services" />
        <ContactSection id="contact" />
      </div>
    </GlobalTheme>
  );
}

export default App;
