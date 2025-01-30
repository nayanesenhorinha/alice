import React, { useEffect } from 'react';
import Navigation from './Navigation';

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
    </div>
  );
};

export default LookingGlass;