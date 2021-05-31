import React, { useState } from 'react';
import styled from 'styled-components';

import useProducts from '../hooks/useProducts';
import CardWrapper from './CardWrapper';

const StyledFilter = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 10px 30px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;    
`;

const Search = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 285px;
`;

const CheckboxFilter = styled(Search)`
    width: 326px;
`;

const SearchInput = styled.input`
    width: 180px;
    height: 30px;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 4px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    outline: none;
`;

const SearchTitle = styled.div`
font-weight: normal;
font-size: 14px;
line-height: 20px;
`;

const CheckboxWrapper = styled.div`
    width: 235px;
    display: flex;
    justify-content: space-between;    
`;

const CheckboxGroupe = styled.div`
label {
    display: block;
    width: 75px;
    height: 30px;
    background: #FFFFFF;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 4px 0px 0px 4px;
    font-size: 12px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
}
input {
    display: none;
    :checked+label {
        box-shadow: unset;
    }
}

:nth-child(1) {
    label {
        border-radius: 4px 0px 0px 4px;
    }
}

:nth-child(3) {
    label {
        border-radius: 0px 4px 4px 0px;
    }
}
`;

const Filter = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [filterTerm, setFilterTerm] = useState([]);

    const {products, loading, error} = useProducts();

    const onSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const onFilter = (e) => {
        if(e.target.checked) {
            setFilterTerm(state=>[...state, e.target.value])
        } else {
            setFilterTerm(state=>state.filter(item=>item.toLowerCase() !== e.target.value.toLowerCase()))
        }
    }

    

    let filteredProducts = products.filter(item=>item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);

    if(filterTerm.length) {
        filteredProducts = filteredProducts.filter(item=>filterTerm.includes(item.country.toLowerCase()));
    }

    return (
        <>
        <StyledFilter>
            <Search>
                <SearchTitle>Lookiing for</SearchTitle>
                <SearchInput onChange={onSearch} value={searchTerm} type="text" placeholder="start typing here..."></SearchInput>
            </Search>
            <CheckboxFilter>
                <SearchTitle>Or filter</SearchTitle>
                <CheckboxWrapper>
                    <CheckboxGroupe>
                        <input value='brazil' onChange={onFilter} type="checkbox" id="brazil"></input>
                        <label htmlFor="brazil">Brazil</label>
                    </CheckboxGroupe>
                    <CheckboxGroupe>
                        <input value='kenya' onChange={onFilter} type="checkbox" id="kenya"></input>
                        <label htmlFor="kenya">Kenya</label>
                    </CheckboxGroupe>
                    <CheckboxGroupe>
                        <input value='columbia' onChange={onFilter} type="checkbox" id="columbia"></input>
                        <label htmlFor="columbia">Columbia</label>
                    </CheckboxGroupe>
                </CheckboxWrapper>
            </CheckboxFilter>
        </StyledFilter>
        <CardWrapper
             products={filteredProducts}
             loading={loading}
             error={error} />
        </>
    )
}

export default Filter;