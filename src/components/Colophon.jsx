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
      <div className='colophon'>
        <p>Todos os direitos reservados.</p>
        <p>Este e-book é um projeto acadêmico e não possui fins lucrativos. </p>
      </div>
      

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