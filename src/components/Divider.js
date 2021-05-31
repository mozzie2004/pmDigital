import React from 'react';
import styled from 'styled-components';

const StyledDivider = styled.div`
    position: relative;
    margin: 0 auto;
    margin-top: 20px;
    width: 30px;
    height: 29px;
    background: ${({white})=> white ? "url('/img/divider_bg_white.svg')" : "url('/img/divider_bg.svg')"} center center/cover no-repeat;
    :after, :before {
        content: '';
        position: absolute;
        top: 50%;
        left: -85px;
        display: block;
        width: 60px;
        height: 1px;
        background: ${({white}) => white ? '#fff' : '#000'};
    }
    :after {
        left: unset;
        right: -85px;
    }
`;

const Divider = ({white=false}) => {
    return <StyledDivider white={white}/>
}

export default Divider;