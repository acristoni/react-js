import imgMapa from "../../img/brasil.png"
import * as S from "./styled.js";
import React, { useState, useEffect } from "react";
import Portos from "../../data/Portos"

export default function Mapa ({PortoEscolhido}) {
    const ListaDePortos = Portos;
    const[porto, setPorto] = useState({
        name: 'Escolha um porto',
        lat: 1,
        lng: 1
    });

    useEffect(() => PortoEscolhido(porto), [porto])

    return (
        <S.Mapa>
            <img src={imgMapa} alt="Mapa do Brasil" />
                <S.Portos>
                    <button onClick={() => setPorto(ListaDePortos[0])} id="santos">Porto de Santos - SP</button>        
                    <button onClick={() => setPorto(ListaDePortos[1])} id="paranagua">Porto Paranagua - PR</button> 
                    <button onClick={() => setPorto(ListaDePortos[2])} id="itapoa">Porto Itapoa - SC</button> 
                    <button onClick={() => setPorto(ListaDePortos[3])} id="riogrande">Porto de Rio Grande - RS</button> 
                    <button onClick={() => setPorto(ListaDePortos[4])} id="chibatao">Porto Chibatao - AM</button> 
                    <button onClick={() => setPorto(ListaDePortos[5])} id="suape">Porto de Suape - PE</button> 
                    <button onClick={() => setPorto(ListaDePortos[6])} id="pecem">Porto de Pecem - CE</button> 
                    <button onClick={() => setPorto(ListaDePortos[7])} id="riodejaneiro">Porto do Rio de Janeiro - RJ</button> 
                    <button onClick={() => setPorto(ListaDePortos[8])} id="bahia">Porto de Madre de Deus - BA</button> 
                    <button onClick={() => setPorto(ListaDePortos[9])} id="vitoria">Porto de Vitoria - ES</button> 
                </S.Portos>
        </S.Mapa>
    )
}