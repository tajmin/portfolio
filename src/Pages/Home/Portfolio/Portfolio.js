import React from 'react';
import { Container } from 'react-bootstrap';
import './Portfolio.css'
import imperial from '../../../images/imperial-1.png';
import onecare from '../../../images/onecare-1.png';
import wanderlust from '../../../images/wanderlust-1.png';
import Button from '@restart/ui/esm/Button';

const Portfolio = () => {
    return (
        <div className="mb-5">
            <Container className="p-5">
                <h2 className="display-6 theme-text px-3">My Recent Projects</h2>
                <div className="px-3 py-5">
                    <div className="d-flex flex-column flex-lg-row py-5">
                        <div className="pro-img-wrap">
                            <img className="img-fluid" src={imperial} alt="imperial-1" />
                        </div>
                        <div className="w-100 text-lg-end mt-4 mt-lg-0 pe-lg-5 pro-inf-wrap">
                            <h2 className="text-white fw-normal">Imperial Motors</h2>
                            <div className="px-lg-4 py-lg-5 mt-4 rounded shadow-lg pro-text-wrap">
                                <p className="text-secondary">Imperial Motors is a niche website for an imaginary luxury car dealership based in Dubai that exhibits a dark theme to best match the luxury lifestyle. A video trailer on the hero section and top cars of the astonishing inventory make up the home page.</p>
                            </div>
                            <Button className="btn theme-button py-2 px-4 my-4">Details</Button>
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <div className="d-flex flex-column flex-lg-row py-5">
                        <div className="w-100 mt-4 mt-lg-0 pe-lg-5">
                            <h2 className="text-white fw-normal">Wanderlust</h2>
                            <div className="px-lg-4 py-lg-5 mt-4 rounded shadow-lg pro-text-wrap">
                                <p className="text-secondary">Wanderlust is a mobile-friendly SPA website for companies that has anything to do with travel and vacations, including but not limited to Travel Agents, Travel eCommerce, Tour Guides, Travel Company, Travel Club, Tour Operator, Travel listing Directory, Travel Deals, and Tour Packages.</p>
                            </div>
                            <Button className="btn theme-button py-2 px-4 my-4">Details</Button>
                        </div>
                        <div className="pro-img-wrap-lt pe-lg-5">
                            <img className="img-fluid" src={wanderlust} alt="imperial-1" />
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <div className="d-flex flex-column flex-lg-row py-5">
                        <div className="pro-img-wrap">
                            <img className="img-fluid" src={onecare} alt="imperial-1" />
                        </div>
                        <div className="w-100 text-lg-end mt-4 mt-lg-0 pe-lg-5 pro-inf-wrap">
                            <h2 className="text-white fw-normal">OneCare</h2>
                            <div className="px-lg-4 py-lg-5 mt-4 rounded shadow-lg pro-text-wrap">
                                <p className="text-secondary">OneCare is a Single Page Application (SPA) website built with React keeping hospitals, all purpose and specialized healthcare centers in mind. This version of the project focuses on an imaginary cancer treament center that also provides basic to specialized healthcare services. </p>
                            </div>
                            <Button className="btn theme-button py-2 px-4 my-4">Details</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Portfolio;