import React, { useState } from "react";
import Mapa from "./components/mapa"
import Resultado from "./components/Resultado"

const App = () => {
  const [portoEscolhido, setPortoEscolhido] = useState({name: 'Carregando...'})

  const PortoEscolhido = (porto) => {
    setPortoEscolhido(porto);
  }

  return (
    <>
      <h1>Tábua das Marés</h1>
      <div style={{display: "flex"}}>
        <Mapa PortoEscolhido={PortoEscolhido}/>
        <Resultado portoEscolhido={portoEscolhido}/>
      </div>  
    </>
  ) 
};

export default App;
