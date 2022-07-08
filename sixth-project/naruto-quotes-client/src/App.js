import narutoImg from "./images/naruto.png"
import styled from "styled-components"
import { Quotes } from "./components/quotes";

const quote = 'Eita Lasqueira';
const speaker = 'Adonai Cristoni';

export default function App() {
  return (
    <Content>
      <Quotes quote={quote} speaker={speaker} />
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


