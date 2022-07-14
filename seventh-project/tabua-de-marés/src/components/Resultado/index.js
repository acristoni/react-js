import * as S from "./styled.js";
import Data from "../../components/Data/index.js";
import Mare from "../Mare/index.js";
import Porto from "../../components/Porto/index.js";



export default function Resultado ({portoEscolhido}) {
    
    return (
        <S.Wrapper>
            <Data portoEscolhido={portoEscolhido}/>
            <Porto portoEscolhido={portoEscolhido}/>
            <Mare />
        </S.Wrapper>
    )
}