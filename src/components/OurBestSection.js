import React from 'react';
import styled from 'styled-components';

import useProducts from '../hooks/useProducts';
import CardWrapper from './CardWrapper';
import SubTitle from './SubTitle';


const StyledOurBestSection = styled.section`
    padding: 80px 10px 110px 10px;
    background: url('/img/about_bg.jpg') center center/cover no-repeat;
`;

const OurBestSection = () => {

    const {products, loading, error} = useProducts();

    return (
        <StyledOurBestSection>
            <SubTitle text='Our best' />
            <CardWrapper 
                products={products.slice(0, 3)}
                loading={loading}
                error={error}
            />
        </StyledOurBestSection>
    )
    
}

export default OurBestSection;