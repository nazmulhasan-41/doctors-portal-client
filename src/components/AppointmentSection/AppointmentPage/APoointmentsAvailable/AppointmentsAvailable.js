import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import MyModal from '../Mymodal/MyModal';
import SingleCard from '../SingleCard/SingleCard';
import './AppointmentsAvailable.css';

const AppointmentsAvailable = ({ date }) => {
    var d = new Date();
    var n = d.getUTCHours();

    const [apnmtByDate,setApnmtByDate]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/getAllAppointments')
        .then(response=>response.json())
        .then(result=>setApnmtByDate(result))

    },[]) 

 
    return (
        <div className='AppointmentsAvailable' >


            <div className='title_apnmt'>
                Available Appointments on {date.toDateString()}
            </div>

            <Row className='row_apnmnt'>
                {
                    apnmtByDate.map(apnmt => (
                        <Col className='single_card_col'>

                            <SingleCard apnmt={apnmt} date={date}>

                            </SingleCard>

                        </Col>

                    ))
                }

            </Row>

        </div>
    );
};

export default AppointmentsAvailable;