import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const MenuList = styled.ul`
    position: absolute;
    top: 52px;
    left: ${({isMain}) => isMain ? '12%' : '50%'};
    ${({isMain}) => !isMain && 'transform: translateX(-50%);'}
    display: flex;
    list-style: none;
    :before {
        content: '';
        content: '';
        position: absolute;
        bottom: 2px;
        left: -30px;
        display: block;
        width: 35px;
        height: 35px;
        background: ${({isMain})=> isMain ? "url('img/menu_bg_white.svg')" : "url('img/menu_bg.svg')"} center center/cover no-repeat;
    }
`;

const MenuItem = styled.li`
    margin-right: 40px;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    a {
        color: ${({isMain}) => isMain ? '#fff' : '#000'};
    }
    :last-child {
        margin-right: 0;
    }
`;

const Menu = ({isMain=false}) => {
    return (
        <nav>
            <MenuList isMain={isMain}>
                <MenuItem isMain={isMain}><Link  to='/'>Coffee house</Link></MenuItem>
                <MenuItem isMain={isMain}><Link  to='/our-coffee'>Our coffee</Link></MenuItem>
                <MenuItem isMain={isMain}><Link  to='/pleasure'>For your pleasure</Link></MenuItem>
            </MenuList>
        </nav>
    )
}

export default Menu;