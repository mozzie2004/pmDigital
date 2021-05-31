import React from 'react';

import PromoSection from '../components/PromoSection';
import BeansSection from '../components/BeansSection';
import CardWrapper from '../components/CardWrapper';
import useProducts from '../hooks/useProducts';
import Footer from '../components/Footer';

const PleasurePage = () => {

    const {products, loading, error} = useProducts();


    return (
        <>
            <PromoSection title='For your pleasure'/>
            <BeansSection
            img='/img/pleasure.png' 
            title='About our goods'
            descr='Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. 
            As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.'
            />
            <CardWrapper 
            products={products}
            loading={loading}
            error={error}
            />
            <Footer />
        </>
    )
}

export default PleasurePage;