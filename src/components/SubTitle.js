import React from 'react';
import styled from 'styled-components';


const StyledSubTitle = styled.h3`
    font-weight: normal;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
`;

const SubTitle = ({text}) => {
    return <StyledSubTitle>{text}</StyledSubTitle>
}

export default SubTitle;