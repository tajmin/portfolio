import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HeroSection.css'

const HeroSection = () => {
    const resumeURL = 'https://drive.google.com/file/d/1kNYhFxyAbWxMOm3XfQEePfC4qlHLSDRq/view?usp=sharing'
    return (
        <div className="hero-section d-flex align-items-center min-vh-100">
            <Container>
                <Row className="px-3">
                    <Col sm={8} className="p-5">
                        <h5 className="theme-text">Hello there! This is </h5>
                        <h1 className="mb-4 display-3 text-white text-break">Md. Tajminur Rahman</h1>
                        <p className="text-secondary">I'm a web developer based in Rajshahi, Bangladesh. Worked as a software engineer for more than 2 years before moving on to front end. I'm mostly comfortable with React but open to anything exciting, cool and challenging. </p>
                        <a href={resumeURL} target="_blank" rel="noreferrer" className="btn theme-button py-2 px-4 my-4">Download Resume</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroSection;