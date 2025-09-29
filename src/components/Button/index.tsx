import {ReactNode} from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import styled from "styled-components";

type BtnProps =  {
    isLoading: boolean;
}

const Btn = styled.button<BtnProps>`
    background-color: ${props => props.isLoading ? 'gray' : 'red'};
    padding: 25px 30px;
`

type Props = {
    children: ReactNode;
    isLoading: boolean;
    onClick: () => void;
};

function Button({ children , isLoading, onClick}: Props) {
    return (
        <Btn onClick={onClick} disabled={isLoading} isLoading={isLoading}>
            {isLoading ? 'Cargando...' : children}
            <FaRegThumbsUp color="blue" size={40}/>
        </Btn>
    );
}

export default Button;

