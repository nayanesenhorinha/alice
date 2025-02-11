import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Header from '../components/Header';

const LookingGlass = ({ 
  onNext, 
  onPrev,
  goToSummary }) => {

  return (
    <div className="page">
      Ilustração de prefácio 2
      <Navigation 
        onPrev={onPrev} 
        onNext={onNext} 
        goToSummary={goToSummary} 
       />
       <Header title={"Through the Looking-Glass"}/>
    </div>
  );
};

export default LookingGlass;