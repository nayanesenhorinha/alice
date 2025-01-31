import React from 'react';
import Navigation from './Navigation';
import Header from '../components/Header';

const Intro = ({ 
  onNext, 
  goToCover,
  goToSummary
  }) => {

  
  return (
    <div className="page">
      Ilustração de introdução
      <Navigation 
        goToCover={goToCover} 
        onNext={onNext} 
        goToSummary={goToSummary} 
        />
      <Header title={"Alice"}/>
    </div>
  );
};

export default Intro;