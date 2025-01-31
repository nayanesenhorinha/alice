import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Header from '../components/Header';

const Afterword = ({ 
 
  onNext, 
  goToCover,
  goToSummary }) => {

  
  return (
    <div className="page">
      Encerramento
      <Navigation 
        goToCover={goToCover} 
        onNext={onNext} 
        goToSummary={goToSummary} 
        />
      <Header />
    </div>
  );
};

export default Afterword;