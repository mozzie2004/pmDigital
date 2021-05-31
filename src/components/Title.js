import React from 'react';

import styled from 'styled-components';

const PromoTitle = styled.h1`
    margin: 0;
    font-weight: bold;
    font-size: 40px;
    line-height: 40px;
    color: #FFFFFF;
`;

const Title = ({text}) => {
    return <PromoTitle>{text}</PromoTitle>
}

export default Title;