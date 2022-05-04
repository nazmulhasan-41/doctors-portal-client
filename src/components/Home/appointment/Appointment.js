import React from 'react';
import { Col, Row } from 'react-bootstrap';
import chair from '../../../images/chair.png';
import './Appointment.css'

const Appointment = () => {
    return (
        <div>
            <Row className='d-flex align-items-center' >
                <Col xs={12} md={5} className='appointmentArea'>
                    <h4>
                        your new smile starts here
                    </h4>
                    <div>
                        <button className='btnclass'>
                            get Appointment
                        </button>
                    </div>
                </Col>

                <Col xs={12} md={6}>
                <img className='imgClass' src={chair}></img>
                   
                </Col>
            </Row>


        </div>


    );
};

export default Appointment;