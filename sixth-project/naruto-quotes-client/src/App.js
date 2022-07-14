import React from 'react';
import { useState, useEffect } from 'react';
import narutoImg from "./images/naruto.png"
import styled from "styled-components"
import { Quotes } from "./components/quotes";
import { getQuote } from './services/quotesService/quotesService';
import jutsuSound from './sounds/jutso.mp3'

const audio = new Audio (jutsuSound);

export default function App() {
  
  const [quotes, setQuotes] = useState({quote: 'Carregando frase...', speaker: 'Aguarde!'})

  const onUpdate = async () => {
    const quote = await getQuote();

    audio.play()
    setQuotes(prevQuote => quote)  
    
  }

  useEffect(() => {
    onUpdate();
  }, [])
  
  return (
    <Content>
      <Quotes quote={quotes.quote} speaker={quotes.speaker} onUpdate={onUpdate}/>
      <NarutoImg src={narutoImg} alt="naruto" />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-height: 100vh;
  max-width:50wv;
  align-self: flex-end;
`;


