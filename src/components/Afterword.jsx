import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Header from '../components/Header';

const Afterword = ({ 
  onPrev,
  onNext, 
  goToCover,
  goToSummary }) => {

  
  return (
    <div className="page">
      Encerramento
      <Navigation 
        onPrev={onPrev} 
        onNext={onNext} 
        goToSummary={goToSummary} 
        />
      <Header />
    </div>
  );
};

export default Afterword;