import React from 'react';

import styled from 'styled-components';
import Menu from './Menu';
import Title from './Title';
import Divider from './Divider';
import ButtonMore from './ButtonMore';
import { useRouteMatch, useLocation } from 'react-router-dom';

const StyledPromoSection = styled.section`
    position: relative;
    padding: ${({isMain}) => isMain ? '180px 10px 200px 10px' : '130px 10px 84px 10px' };
    background: ${({bg}) => bg} center center/cover no-repeat;
    text-align: center;
    p {
        margin-top: 20px;
    }
`;


const PromoDescr = styled.p`
    margin-top: 35px;
    font-weight: bold;
    font-size: 24px;
    color: #FFFFFF;
`;


const PromoSection = ({title}) => {
    
    let matchMain = useRouteMatch('/');

    let location = useLocation();

    let background;

    switch(location.pathname) {
        case '/':
            background = 'url("/img/main_bg.jpg")';
            break;
        case '/our-coffee':
            background = 'url("/img/our_coffee_bg.jpg")'
            break;
        case '/pleasure' :
            background = 'url("/img/pleasure_bg.jpg")'
            break;
        default: 
        background = 'url("/img/our_coffee_bg.jpg")';
    }

    return (
        <StyledPromoSection isMain={matchMain.isExact} bg={background}>
            <Menu isMain/>
            <Title text={title} />
            {
                matchMain.isExact ? <>
                    <Divider white/>
                    <PromoDescr as='h2'>We makes every day full of energy and taste Want to try our beans?</PromoDescr>
                    <PromoDescr>Want to try our beans?</PromoDescr>
                    <ButtonMore text='More'/>
                </> : null
            }
        </StyledPromoSection>
    )
}

export default PromoSection;