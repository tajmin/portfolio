import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faCaretRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container className="p-5">
                <h2 className="fs-2 theme-text px-3 pb-5">About Me</h2>
                <Row className="px-3">
                    <Col sm={8}>
                        <p className="text-secondary">Peace be upon you! I'm Tajmin and I'm a web and front end developer. I mainly work with React but I'm also comfortable with JavaScript and ES6. The first time web development intrigued me was back in 2013, when I was pursuing my bachelor degree in Computer Science and Engineering. So I decided to follow that path but ended up as a software engineer with focus on backend stuff.</p>
                        <p className="text-secondary">Although it took me a while from there, but after 2+ years of privilege of working as a software engineer and a few ventures here and there, I'm finally closer to my goal. When I'm not doing all these, I rather spend my time with interesting things, like Machine Learning.</p>
                        <p className="text-secondary">Some of the tools and technologies I'm comfortable with: </p>
                        <div className="d-flex text-secondary mb-3">
                            <ul className="list-unstyled pe-5">
                                <li><FontAwesomeIcon className="me-3" icon={faCaretRight} />React</li>
                                <li><FontAwesomeIcon className="me-3" icon={faCaretRight} />ES6</li>
                                <li><FontAwesomeIcon className="me-3" icon={faCaretRight} />HTML</li>
                                <li><FontAwesomeIcon className="me-3" icon={faCaretRight} />CSS</li>
                            </ul>
                            <ul className="list-unstyled">
                                <li><FontAwesomeIcon className="me-3" icon={faCaretRight} />Tailwind</li>
                                <li><FontAwesomeIcon className="me-3" icon={faCaretRight} />Bootstrap</li>
                                <li><FontAwesomeIcon className="me-3" icon={faCaretRight} />Material UI</li>
                                <li><FontAwesomeIcon className="me-3" icon={faCaretRight} />VS Code</li>
                            </ul>
                        </div>
                        <div>
                            <a href="mailto:tajminur.rahman.cs@gmail.com" rel="noreferrer" className="text-secondary fs-3 me-3"><FontAwesomeIcon icon={faEnvelope} /></a>
                            <a href="https://www.linkedin.com/in/tajminur/" rel="noreferrer" className="text-secondary fs-3 me-3"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="https://github.com/tajmin" rel="noreferrer" className="text-secondary fs-3 me-3"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://stackoverflow.com/users/3445322/noobcoder" rel="noreferrer" className="text-secondary fs-3 me-3"><FontAwesomeIcon icon={faStackOverflow} /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;