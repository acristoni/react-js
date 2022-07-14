import * as S from "./styled.js";
import Seta from "../../img/seta.png"
import useMare from '../../hooks/mare-hooks';

export default function Tabua ({altura, hora}) {
    const { calcHora } = useMare()

    return (
        <S.Tabua>
            <S.Seta>
                <img src={Seta} alt="seta" />
            </S.Seta>
            <S.TextTabua>
                <h1>Tipo: Alta</h1>
                <h2>Altura: {altura} metros</h2>
                <h2>Hora: {calcHora(hora)}</h2>
            </S.TextTabua>
        </S.Tabua>
    )
}