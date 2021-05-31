import React from 'react';

import PromoSection from '../components/PromoSection';
import ItemDescr  from '../components/ItemDescr';
import Footer from '../components/Footer';

const ItemPage = () => {
    return (
        <>
        <PromoSection title='Our Coffee'/>
        <ItemDescr />
        <Footer />
        </>
    )
}

export default ItemPage;