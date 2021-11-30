import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faCaretRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const ProjectInfo = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});

    useEffect(() => {
        fetch('https://tajmin.github.io/onion-api/portfolio_projects.json')
            .then(res => res.json())
            .then(data => {
                const projectData = data?.find(item => item.id.toString() === id);
                setProject(projectData);
            })
    }, [])

    //{project.}

    return (
        <div>
            <Container className="p-0">
                <img className="img-fluid" src={project.img_banner} alt="banner" />
            </Container>
            <Container className="px-5 px-lg-0 mb-5">
                <h2 className="text-white fw-light pt-5 pb-4">{project.title}</h2>
                <div className="mb-5 text-end">
                    <a href={project.live} className="theme-text"><FontAwesomeIcon className="me-3 fs-4" icon={faExternalLinkAlt} /></a>
                    <a href={project.github} className="theme-text"><FontAwesomeIcon className="me-2 fs-4" icon={faGithub} /></a>
                </div>
                <p className="text-secondary pb-3">{project.about}</p>
                <p className="text-white">Features</p>
                {
                    project.features?.map(feature => <span key={feature} className="d-block text-secondary ps-3 py-1">
                        <FontAwesomeIcon className="me-2" icon={faCaretRight} /> {feature}
                    </span>)
                }
            </Container>
            <Container>
                <img className="img-fluid border border-secondary mb-4" src={project.image2} alt="banner" />
                <img className="img-fluid border border-secondary" src={project.image3} alt="banner" />
            </Container>
        </div>
    );
};

export default ProjectInfo;