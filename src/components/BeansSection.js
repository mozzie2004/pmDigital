import React from 'react';
import styled from 'styled-components';

import SubTitle from './SubTitle';
import Divider from './Divider';

const StyledBeansSection = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 70px 10px 60px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 800px;
    :after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        dispay: block;
        width: 240px;
        height: 1px;
        background: black;
    }
`;

const BeansImg = styled.div`
    width: 272px;
    height: 355px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const BeansDescr = styled.div`
    margin-top: 10px;
    max-width: 346px;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
`;

const BeansText = styled.div`
    margin-top: 25px;
`;

const BeansSection = ({title, descr, img}) => {
    return (
        <StyledBeansSection>
            <BeansImg><img src={img} alt='coffee' /></BeansImg>
            <BeansDescr>
                <SubTitle text={title} />
                <Divider />
                <BeansText>{descr}</BeansText>
            </BeansDescr>
        </StyledBeansSection>
    )
}

export default BeansSection;