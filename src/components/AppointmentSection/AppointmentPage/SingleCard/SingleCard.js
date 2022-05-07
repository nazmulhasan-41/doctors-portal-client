import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MyModal from '../Mymodal/MyModal';

const SingleCard = ({ apnmt,date }) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    let navigate = useNavigate();

    function openModal() {

        //check weather user is logged in
        var email=localStorage.getItem('email');
        // console.log(email, typeof email);
        if( email)
        {
            setIsOpen(true);
        }
        else{
            navigate('/login');
        }
        
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (

        <Card className='card_apnmnt' >

            <Card.Body className='classBody_apnmnt'>
                <Card.Title className='cardTitle_apnmnt'>{apnmt.serviceName}</Card.Title>
                <div className='time_apnmnt'>
                    {apnmt.time}.00-{(apnmt.time) + 1}:00
                </div>
                <Card.Text>
                    {apnmt.availableSeats} spaces available
                </Card.Text>

                <Button className='book_apnmnt_btn' onClick={openModal} variant="primary">Book Appointment</Button>

                <MyModal
                    apnmt={apnmt}
                    serviceName={apnmt.serviceName}
                    modalIsOpen={modalIsOpen}
                    closeModal={closeModal}
                    date={date}
                ></MyModal>


            </Card.Body>
        </Card>
    );
};

export default SingleCard;