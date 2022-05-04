import React from 'react';
import { Col, Row } from 'react-bootstrap';
import careimage from '../../images/treatment.png';
import './Care.css';


const Care = () => {
    return (
        <Row  className='careRow' >
            <Col xs={12} md={4}>
                <img className='careimg' src={careimage}></img>
            </Col>
            <Col xs={12} md={8}  className='row align-items-center'>
                <h2 className='caretitle'>
                Exceptional care on your terms

                </h2>
                <h6 className='descare'>
                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </h6>
                <button className='learnmore' >
                    Learn More
                </button>
                
            </Col>
        </Row>
    );
};

export default Care;