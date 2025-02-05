import React, { useEffect } from 'react';
import book_infos from '../control/book_infos';
import Navigation from './Navigation';
import Header from '../components/Header';

const Credits = ({onNext, goToCover, goToSummary}) => {

  const chapterTitle = "Credits";
  
    useEffect(() => {
      const bookTitleT = book_infos.title; 
      document.title = `${chapterTitle} • ${bookTitleT}`;
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
      <p className='chapter_text'>
        Este e-book foi desenvolvido como projeto de conclusão do curso de Comunicação Social com habilitação em Produção Editorial da Universidade Federal do Rio de Janeiro (UFRJ), que será defendido por Nayane de Souza em junho de 2025. O objetivo é a criação de um projeto digital de livro, experimentando um novo formato de e-book, que proporciona uma experiência de leitura acessível e funcional.
      </p>
      <div className='credits_container'>
        <p className='credits_titulo'>Projeto digital, ilustrações e desenvolvimento</p>
        <p className='credits_texto'>Nayane de Souza</p>
      </div>
      <div className='credits_container'>
        <p className='credits_titulo'>Texto</p>
        <p className='credits_texto'>Project Gutenberg</p>
      </div>
      <div className='credits_container'>
        <p className='credits_titulo'>Agradecimentos</p>
        <p className='credits_texto'>Lista de nomes Lista de nomes</p>
      </div>

      <Navigation 
        goToCover={goToCover} 
        onNext={onNext} 
        goToSummary={goToSummary} 
        />
      <Header title={"Credits"}/>
    </div>
  );
};

export default Credits;