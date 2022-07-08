import styled from 'styled-components'
import { string } from 'prop-types'

export const Button = ({children}) => {
    return <Buttons>{children}</Buttons>
}

Button.propTypes = {
    children: string
}

const Buttons = styled.button`
    background: #DC872C;
    color: white;
    border: none;
    border-radius: 0;
    font-size: 1.5em;
    padding: 10px 20px;
    font-family: "New Tegomin";
    cursor: pointer;
    box-shadow: #333 3px 3px;

    &:hover {
        background: red;
    }
`;

