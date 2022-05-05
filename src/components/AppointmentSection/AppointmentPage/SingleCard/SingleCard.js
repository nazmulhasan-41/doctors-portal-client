import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import MyModal from '../Mymodal/MyModal';

const SingleCard = ({ apnmt }) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (

        <Card className='card_apnmnt' >

            <Card.Body className='classBody_apnmnt'>
                <Card.Title className='cardTitle_apnmnt'>{apnmt.serviceName}</Card.Title>
                <div className='time_apnmnt'>
                    {apnmt.date}.00-{(apnmt.date) + 1}:00
                </div>
                <Card.Text>
                    {apnmt.availableSeats} spaces available
                </Card.Text>

                <Button className='book_apnmnt_btn' onClick={openModal} variant="primary">Book Appointment</Button>

                <MyModal
                    serviceName={apnmt.serviceName}
                    modalIsOpen={modalIsOpen}
                    closeModal={closeModal}
                ></MyModal>


            </Card.Body>
        </Card>
    );
};

export default SingleCard;