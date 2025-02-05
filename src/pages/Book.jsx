import React, { useState,  useEffect } from 'react';
import { useSwipeable } from 'react-swipeable'; 

import '../control/copy';
import '../styles/ebook.css';

// Componentes de cada parte do livro (capa, sumário, capítulos, etc.)
import Cover from '../components/Cover';
import Infos from '../components/Infos';
import Intro from '../components/Intro';
import Summary from '../components/Summary';
import InWonderland from '../components/InWonderland';
import Chapter1 from '../chapters/Chapter1';
import Chapter2 from '../chapters/Chapter2';
import Chapter3 from '../chapters/Chapter3';
import Chapter4 from '../chapters/Chapter4';
import Chapter5 from '../chapters/Chapter5';
import Chapter6 from '../chapters/Chapter6';
import Chapter7 from '../chapters/Chapter7';
import Chapter8 from '../chapters/Chapter8';
import Chapter9 from '../chapters/Chapter9';
import Chapter10 from '../chapters/Chapter10';
import Chapter11 from '../chapters/Chapter11';
import Chapter12 from '../chapters/Chapter12';
import LookingGlass from '../components/LookingGlass';
import Chapter13 from '../chapters/Chapter13';
import Chapter14 from '../chapters/Chapter14';
import Chapter15 from '../chapters/Chapter15';
import Chapter16 from '../chapters/Chapter16';
import Chapter17 from '../chapters/Chapter17';
import Chapter18 from '../chapters/Chapter18';
import Chapter19 from '../chapters/Chapter19';
import Chapter20 from '../chapters/Chapter20';
import Chapter21 from '../chapters/Chapter21';
import Chapter22 from '../chapters/Chapter22';
import Chapter23 from '../chapters/Chapter23';
import Chapter24 from '../chapters/Chapter24';
import Afterword from '../components/Afterword';
import Credits from '../components/Credits';
import Colophon from '../components/Colophon';

// Componente principal do livro
const Book = () => {

  // Estado que controla a página atual
  const [currentPage, setCurrentPage] = useState(0);

  // Função para atualizar a página atual e salvar no localStorage
  const setCurrentPageAndSave = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      localStorage.setItem('currentPage', page); 
    }
  };

  // Definição de todas as páginas do livro, cada uma representada por um componente
  const pages = [
    <Cover 
      onNext={() => setCurrentPageAndSave(1)} 
      goToSummary={() => setCurrentPageAndSave(3)} />,

    <Infos 
      onNext={() => setCurrentPageAndSave(2)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)} />,

    <Intro 
      onNext={() => setCurrentPageAndSave(3)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

    <Summary 
      onNext={() => setCurrentPageAndSave(4)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToChapter={(pageIndex) => setCurrentPageAndSave(pageIndex)}/>,

    <InWonderland
      onNext={() => setCurrentPageAndSave(5)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

    <Chapter1 
      onNext={() => setCurrentPageAndSave(6)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

    <Chapter2 
      onNext={() => setCurrentPageAndSave(7)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

    <Chapter3 
      nNext={() => setCurrentPageAndSave(8)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

    <Chapter4 
      onNext={() => setCurrentPageAndSave(9)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

    <Chapter5 
      onNext={() => setCurrentPageAndSave(10)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

    <Chapter6 
      onNext={() => setCurrentPageAndSave(11)}  
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

    <Chapter7 
      onNext={() => setCurrentPageAndSave(12)} 
      goToCover={() => setCurrentPageAndSave(0)} g
      goToSummary={() => setCurrentPageAndSave(3)}/>, 

    <Chapter8 
      onNext={() => setCurrentPageAndSave(13)}  
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,
    <Chapter9 
      onNext={() => setCurrentPageAndSave(14)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>, 
    <Chapter10 
      onNext={() => setCurrentPageAndSave(15)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,
    <Chapter11 
      onNext={() => setCurrentPageAndSave(16)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,
    
    <Chapter12 
      onNext={() => setCurrentPageAndSave(17)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>, 
    
    <LookingGlass 
      onNext={() => setCurrentPageAndSave(18)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

    <Chapter13 
      onNext={() => setCurrentPageAndSave(19)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

    <Chapter14
      onNext={() => setCurrentPageAndSave(20)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,
      
      <Chapter15
      onNext={() => setCurrentPageAndSave(21)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

      <Chapter16
      onNext={() => setCurrentPageAndSave(22)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

      <Chapter17
      onNext={() => setCurrentPageAndSave(23)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

      <Chapter18
      onNext={() => setCurrentPageAndSave(24)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

      <Chapter19
      onNext={() => setCurrentPageAndSave(25)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

      <Chapter20
      onNext={() => setCurrentPageAndSave(26)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

      <Chapter21
      onNext={() => setCurrentPageAndSave(27)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

      <Chapter22
      onNext={() => setCurrentPageAndSave(28)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

      <Chapter23
      onNext={() => setCurrentPageAndSave(29)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

      <Chapter24
      onNext={() => setCurrentPageAndSave(30)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,

    <Afterword 
      onNext={() => setCurrentPageAndSave(31)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>, 
    
    <Credits 
      onNext={() => setCurrentPageAndSave(32)} 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>,
      
    <Colophon 
      goToCover={() => setCurrentPageAndSave(0)} 
      goToSummary={() => setCurrentPageAndSave(3)}/>
  ];

  // Recupera a página salva no localStorage quando o componente é montado
  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setCurrentPage(parseInt(savedPage, 10));
    }
  }, []);

  // Função para lidar com o deslizar para a esquerda (avançar)
  const handleSwipeLeft = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPageAndSave(currentPage + 1);
    }
  };

  // Função para lidar com o deslizar para a direita (voltar)
  const handleSwipeRight = () => {
    if (currentPage > 0) { 
      setCurrentPageAndSave(currentPage - 1); 
    }
  };

   // Configura o hook de gestos de deslizar
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Renderiza a página atual, aplicando os gestos de deslizar
  return (
    <div {...swipeHandlers}>
      {pages[currentPage]}
    </div>
  );
};

export default Book;