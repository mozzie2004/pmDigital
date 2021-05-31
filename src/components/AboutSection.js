import React from 'react';
import styled from 'styled-components';

import SubTitle from './SubTitle';
import Divider from './Divider';

const StyledAboutSection = styled.section`
    padding: 80px 10px 100px 10px;
    text-align: center;
`;

const AboutDescr = styled.div`
    max-width: 590px;
    margin: 0 auto;
    margin-top: 40px;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
`;

const AboutSection = ({title}) => {
    return (
        <StyledAboutSection id='about'>
            <SubTitle text={title} />
            <Divider />
            <AboutDescr>
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.<br></br><br></br>
                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.
            </AboutDescr>
        </StyledAboutSection>
    )
}

export default AboutSection;