import React from 'react';
import styled, {keyframes} from 'styled-components';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    } 
`;

const StyledSpinner = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;
    :after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: blue transparent blue transparent;
        animation: 1.2s ${spin} linear infinite;
    }
`;


const Spinner = () => {
    return <StyledSpinner />
}

export default Spinner;