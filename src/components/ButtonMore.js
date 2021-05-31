import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
    display: inline-block;
    padding: 5px 42px;
    margin-top: 18px;
    border: 1px solid #FFFFFF;
    border-radius: 3px;
    background: none;
    font-weight: bold;
    line-height: 20px;
    font-size: 14px;
    color: #FFFFFF;
    cursor: pointer;
`;

const ButtonMore = ({text}) => {
    return <Button href='#about'>{text}</Button>
}

export default ButtonMore;