import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RegistrationSection from './components/RegistrationSection';
import FeaturedOpportunities from './components/FeaturedOpportunities';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('general'); // 'general', 'techfest', or 'organize'
  const registrationRef = useRef(null);

  const scrollToRegistration = () => {
    registrationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFeatureClick = (type) => {
    if (type === 'cultural') setActiveTab('general');
    if (type === 'tech') setActiveTab('techfest');
    if (type === 'work') setActiveTab('organize');
    scrollToRegistration();
  };

  return (
    <div className="app-container">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content">
        <Hero onJoinClick={scrollToRegistration} />

        <main className="container" style={{ padding: '3rem 1rem' }} ref={registrationRef}>
          <RegistrationSection activeTab={activeTab} />
        </main>

        <FeaturedOpportunities onFeatureClick={handleFeatureClick} />
      </div>
    </div>
  );
}

export default App;
