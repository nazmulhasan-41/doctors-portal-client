import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './ApoointmentHome.css';
import doctor from '../../images/doctor.png';
import { Link } from 'react-router-dom';


const AppointmentHome = () => {
    return (
        <div className='appointmenthome'>

            <Row className='row align-items-center'>
                <Col  xs={12} md={6}>
                    <img className='apnmtimg full-width' src={doctor}></img>
                </Col>
                <Col xs={12} md={6}  className='row align-items-center' >
                    <h4>
                        Appointment
                    </h4>
                    <h2>
                        Make an appointment Today
                    </h2>
                    <h6>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure ther

                    </h6>
                    <Link to='/appointment'  className='learnmore_ah' >
                        Learn More
                    </Link>
                </Col>
            </Row>



        </div>
    );
};

export default AppointmentHome;