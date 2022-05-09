import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import MyModal from '../Mymodal/MyModal';

const SingleCard = ({ apnmt,date }) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    let navigate = useNavigate();

    function openModal() {

        var email=localStorage.getItem('email');

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

    const [serviceName,setServiceName]=useState('');
    useEffect(()=>{
        fetch(`http://localhost:5000/getServiceName/${apnmt.serviceId}`)
        .then(response=>response.json())
        .then(result=>
            {
                console.log(result);
                setServiceName(result.serviceName)
                
            }
            )

    },[]) 

    return (

        <Card className='card_apnmnt' >

            <Card.Body className='classBody_apnmnt'>
                <Link to ={`/appmntDetails/${apnmt._id}`}  className='cardTitle_apnmnt'>{serviceName}</Link>
                <h6>{apnmt.docEmail}</h6>
                <div className='time_apnmnt'>
                    {apnmt.time} AM/PM
                </div>
                <Card.Text>
                    {apnmt.slots} spaces available
                </Card.Text>

                <Button className='book_apnmnt_btn' onClick={openModal} variant="primary">Book Appointment</Button>

                <MyModal
                    apnmt={apnmt}
                    modalIsOpen={modalIsOpen}
                    closeModal={closeModal}
                    date={date}
                    serviceName={serviceName}
                ></MyModal>


            </Card.Body>
        </Card>
    );
};

export default SingleCard;