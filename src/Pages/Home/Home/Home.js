import React from 'react';
import ContactMe from '../ContactMe/ContactMe';
import HeroSection from '../HeroSection/HeroSection';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Portfolio></Portfolio>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;