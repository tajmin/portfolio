import React from 'react';
import ContactMe from '../ContactMe/ContactMe';
import HeroSection from '../HeroSection/HeroSection';
import Portfolio from '../Portfolio/Portfolio';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div>
            <div className="d-none d-md-inline-block">
                <div className="d-flex flex-column">
                    <a href="gg" rel="noreferrer" className="text-secondary fs-5"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="gg" rel="noreferrer" className="text-secondary fs-5"><FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>
            <Parallax pages={3} style={{ top: '0', left: '0' }}>
                <ParallaxLayer offset={0} speed={1} >
                    <HeroSection></HeroSection>
                </ParallaxLayer>
                <ParallaxLayer offset={0.95} speed={0.5} factor={1.5} >
                    <Portfolio></Portfolio>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.5} >
                    <ContactMe></ContactMe>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};

export default Home;