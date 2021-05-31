import React from 'react';

import PromoSection from '../components/PromoSection';
import BeansSection from '../components/BeansSection';
import Filter from '../components/Filter';
import Footer from '../components/Footer';

const OurCoffeePage = () => {
    return (
        <>
            <PromoSection title='Our Coffee'/>
            <BeansSection 
            title='About our beans'
            descr='Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. 
            As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.'
            img='/img/beans.jpg'
            />
            <Filter />
            <Footer />
        </>
    )
}

export default OurCoffeePage;