import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatisticsSection from './components/StatisticsSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection'; 
import AboutMeSection from './components/AboutMeSection'; 
import ServicesSection from './components/ServicesSection';
import ProjectDetail from './components/ProjectDetail'; // Importe a página de detalhes do projeto
import GlobalTheme from './components/GlobalStyles'; 

function App() {
  return (
    <GlobalTheme>
      <Router> {/* Adicione o Router aqui */}
        <div>
          <Header />
          <HeroSection id="hero" />
          <StatisticsSection id="statistics" />
          <AboutMeSection id="about" />
          <Routes> {/* Use Routes para definir as rotas */}
            <Route path="/" element={<PortfolioSection />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} /> {/* Rota para detalhes do projeto */}
          </Routes>
          <ServicesSection id="services" />
          <ContactSection id="contact" />
        </div>
      </Router>
    </GlobalTheme>
  );
}

export default App;
