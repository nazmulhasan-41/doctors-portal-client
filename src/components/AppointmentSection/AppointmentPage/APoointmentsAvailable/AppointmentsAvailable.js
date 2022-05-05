import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import MyModal from '../Mymodal/MyModal';
import SingleCard from '../SingleCard/SingleCard';
import './AppointmentsAvailable.css';



const AppointmentsAvailable = ({ date }) => {
    var d = new Date();
    var n = d.getUTCHours();

    const apnmtByDate = [
        {
            id: 1,
            serviceName: 'Orthodentics',
            date: n,
            availableSeats: 10,

        },
        {
            id: 2,
            serviceName: 'medicine',
            date: n,
            availableSeats: 10,

        },
        {
            id: 3,
            serviceName: 'gynocology',
            date: n,
            availableSeats: 10,

        },
        {
            id: 3,
            serviceName: 'Nurology',
            date: n,
            availableSeats: 10,

        },
        {
            id: 3,
            serviceName: 'orthodentics',
            date: n,
            availableSeats: 10,

        },
    ];


    return (
        <div className='AppointmentsAvailable' >


            <div className='title_apnmt'>
                Available Appointments on {date.toDateString()}
            </div>

            <Row className='row_apnmnt'>
                {
                    apnmtByDate.map(apnmt => (
                        <Col className='single_card_col'>

                            <SingleCard apnmt={apnmt}>

                            </SingleCard>

                        </Col>

                    ))
                }

            </Row>

        </div>
    );
};

export default AppointmentsAvailable;