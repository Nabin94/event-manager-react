import React from 'react';
import './heroSection.scss';
import SearchEvent from './searchEvent';

function HeroSection() {
  return (
    <div className="hero-section">
      <h1><i>Cherish Your Moment</i></h1>

      <SearchEvent/>
    </div>
  );
}

export default HeroSection;