import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Header from '../components/Header';

const InWonderland = ({ 
  onNext, 
  goToCover,
  goToSummary }) => {

  return (
    <div className="page">
      Ilustração de prefácio
      <Navigation 
        goToCover={goToCover} 
        onNext={onNext} 
        goToSummary={goToSummary} 
       />
      <Header title={"Alice’s Adventures in Wonderland"}/>
    </div>
  );
};

export default InWonderland;