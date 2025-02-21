import React, { useEffect } from 'react';
import book_infos from '../control/book_infos';
import Navigation from './Navigation';
import Header from '../components/Header';

const Credits = ({onNext, onPrev, goToSummary}) => {

  const chapterTitle = "Credits";
  
    useEffect(() => {
      const bookTitleT = book_infos.title; 
      document.title = `${chapterTitle} of the Alice book`;
      return () => {
        document.title = book_infos.title; 
      };
    }, [chapterTitle]);

  return (
    <div className="page credits">
      <img 
        className="icone_cabeco" 
        src="https://placehold.co/25" 
        alt="Imagem Placeholder" 
        loading="lazy" 
      />
      
      <div className='credits_container'>
        <p className='thead'>Título dos créditos</p>
        <div className='tr'>
          <p className='th'>Ilustrações</p>
          <p className='th'>Nayane de Souza</p>
        </div>
        <div className='tr'>
          <p className='th'>Projeto gráfico</p>
          <p className='th'>&nbsp;</p>
        </div>
        <div className='tr'>
          <p className='th'>Desenvolvimento</p>
          <p className='th'>&nbsp;</p>
        </div>
        <div className='tr'>
          <p className='th'>Texto</p>
          <p className='th'>Projeto Gutemberg</p>
        </div>
      </div>

      <Navigation 
        onPrev={onPrev} 
        onNext={onNext} 
        goToSummary={goToSummary} 
        />
      <Header title={"Credits"}/>
    </div>
  );
};

export default Credits;