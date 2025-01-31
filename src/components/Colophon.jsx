import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Header from '../components/Header';

const Colophon = ({ 
  
  onNext, 
  goToCover,
  goToSummary,
   }) => {

  
  return (
    <div className="page">
      Ends
      <Navigation 
        goToCover={goToCover} 
        onNext={onNext} 
        goToSummary={goToSummary} 
        />
      <Header />
    </div>
  );
};

export default Colophon;