import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import Divider from './Divider';

const StyledFooter = styled.footer`
    position: relative;
    padding: 80px 10px 20px 10px;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <Menu />
            <Divider />
        </StyledFooter>
    )
}

export default Footer;