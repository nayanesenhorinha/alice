import React from 'react';
import Navigation from './Navigation';
import Header from '../components/Header';

const Intro = ({ 
  onNext, 
  onPrev,
  goToSummary
  }) => {

  
  return (
    <div className="page">
      Ilustração de introdução
      <Navigation 
        onPrev={onPrev} 
        onNext={onNext} 
        goToSummary={goToSummary} 
        />
      <Header title={"Alice"}/>
    </div>
  );
};

export default Intro;