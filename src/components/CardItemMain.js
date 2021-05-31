import React from 'react';
import styled from 'styled-components';
import { useHistory, useRouteMatch } from 'react-router-dom';

const CardItem = styled.div`
    margin: 40px 35px 0 35px;
    padding: 22px;
    width: 220px;
    background: rgba(255, 255, 255, 0.65);
    border-radius: 8px;
    cursor: pointer;
    ${({matchMain})=>matchMain ? 'filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.25));' : 'unset;'}
`;

const ImgWrapper = styled.div`
    margin: 0 auto;
    width: 150px;
    height: 130px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const CardTitle = styled.div`
    margin-top: 14px;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align:center;
`;

const Price = styled(CardTitle)`
    text-align: right;
    margin-top: 10px;
    font-weight: bold;
`;

const Country = styled(CardTitle)`
    text-align: right;
`;

const CardItemMain = ({img, price, cardTitle, country, id}) => {

    const matchMain = useRouteMatch('/');
    const history = useHistory();

    return (
        <CardItem onClick={()=>{history.push(`/our-coffee/${id}`)}} matchMain={matchMain}>
            <ImgWrapper><img src={img} alt={cardTitle}></img></ImgWrapper>
            <CardTitle>{cardTitle}</CardTitle>
            {
                matchMain.isExact ? null : <Country>{country}</Country> 
            }
            <Price>{price}$</Price>
        </CardItem>

    )
}

export default CardItemMain;