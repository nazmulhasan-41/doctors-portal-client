import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MyModal from '../../AppointmentSection/AppointmentPage/Mymodal/MyModal';

const AddApmntApmntDetails = (props) => {

    const { apnmt, date, serviceName } = props.state;

    const [modalIsOpen, setIsOpen] = useState(false);
    let navigate = useNavigate();

    function openModal() {

        var email = localStorage.getItem('email');

        if (email) {
            setIsOpen(true);
        }
        else {
            navigate('/login');
        }
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div className='addApmntApmntDetails'>
            <Button className='book_apnmnt_btn_in_apmntDetails' onClick={openModal}
            style={{
                padding: '10px',
                backgroundColor: 'cadetblue'
            }}
            variant="primary">Book Appointment</Button>

            <MyModal

                apnmt={apnmt}
                date={date}
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                serviceName={serviceName}

            ></MyModal>
        </div>
    );
};

export default AddApmntApmntDetails;