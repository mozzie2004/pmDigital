import React from 'react';
import styled from 'styled-components';

import CardItemMain from './CardItemMain';
import Spinner from './Spinner';

const StyledCardWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 870px;
`;

const CardWrapper = ({products, loading, error}) => {

    if (error) {
        return error;
    }

    return (
        <StyledCardWrapper>
            {
                !loading ? products.map(item=>{
                    return (
                        <CardItemMain 
                        key={item.id} 
                        img={item.img} 
                        price={item.price} c
                        cardTitle={item.title} 
                        country={item.country}
                        id={item.id}
                    />
                    )
                }) : <Spinner />
            }
        </StyledCardWrapper>
    )   
}

export default CardWrapper;