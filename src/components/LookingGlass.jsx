import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Header from '../components/Header';

const LookingGlass = ({ 
  onNext, 
  goToCover,
  goToSummary }) => {

  return (
    <div className="page">
      Ilustração de prefácio 2
      <Navigation 
        goToCover={goToCover} 
        onNext={onNext} 
        goToSummary={goToSummary} 
       />
       <Header title={"Through the Looking-Glass"}/>
    </div>
  );
};

export default LookingGlass;