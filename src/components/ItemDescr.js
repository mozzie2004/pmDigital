import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import SubTitle from './SubTitle';
import Divider from './Divider';
import  useProducts  from '../hooks/useProducts';
import Spinner from './Spinner';

const StyledItemDescr = styled.div`
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

const Img = styled.div`
    width: 355px;
    height: 355px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ItemDescription = styled.div`
    margin-top: 10px;
    max-width: 346px;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
`;

const ItemText = styled.div`
    margin-top: 25px;
    text-align: left;
    span {
        font-weight: bold;
    }
`;

const ItemDescr = () => {

    let { id } = useParams();
    
    const {products, loading} = useProducts();

    const item = products.find(item=>item.id === id);

    return (
        <StyledItemDescr>
            {
                item ? <>
                <Img><img src={item.img} alt="item.title" /></Img>
                <ItemDescription>
                    <SubTitle text={`About ${item.title}`} />
                    <Divider />
                    <ItemText><span>Country: </span>{item.country}</ItemText>
                    <ItemText><span>Description: </span>{item.description}</ItemText>
                    <ItemText><span>Price: </span>{item.price}</ItemText>
                </ItemDescription>
                </> : <Spinner />
            }
        </StyledItemDescr>
    )
}

export default ItemDescr;