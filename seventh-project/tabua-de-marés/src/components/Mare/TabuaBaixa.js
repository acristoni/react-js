import * as S from "./styled.js";
import Seta from "../../img/seta.png"
import useMare from '../../hooks/mare-hooks';

export default function Tabua (props) {
    const { calcHora } = useMare()
    
    return (
        <S.Tabua>
            <S.Seta>
                <img src={Seta} alt="seta" className="mareBaixa" />
            </S.Seta>
            <S.TextTabua>
                <h1>Tipo: Baixa</h1>
                <h2>Altura: {props.altura} metros</h2>
                <h2>Hora: {calcHora(props.hora)}</h2>
            </S.TextTabua>
        </S.Tabua>
    )
}