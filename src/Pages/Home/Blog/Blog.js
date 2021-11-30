import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../../images/Coming-Soon.jpg'

const Blog = () => {
    return (
        <div>

            <Container>
                <h2 className="fs-2 theme-text px-3 pb-5">Blog</h2>
                <img className="img-fluid" src={img} alt="" />
            </Container>
        </div>
    );
};

export default Blog;