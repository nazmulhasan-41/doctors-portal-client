import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const MyModal = ({ closeModal, modalIsOpen , date,apnmt}) => {

    var email=localStorage.getItem('email');

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        var serviceId=apnmt.serviceId;
        var docEmail=apnmt.docEmail;
        var time=apnmt.time;
        var slots=apnmt.slots;
        var newApnmt={serviceId,docEmail,time,slots}

        console.log(newApnmt);

        var newData={...data, email, ...newApnmt , prescriptionFlag:0};

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        };
        fetch('http://localhost:5000/addAppointment', requestOptions)
            .then(response => response.json())
            .then(res => console.log(res) );

        closeModal();
    }
    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 >{apnmt.serviceId}</h2>
               
                <form className='formModal' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Patients name' {...register("firstName")} /><br />
                    <input placeholder='Phone No' {...register("phoneno")} /><br />
                    <input defaultValue={date.toDateString()} {...register("date")} /><br />
                    <input placeholder='Age' {...register("age")} /><br />
                    <input placeholder='Weight' {...register("weight")} /><br />
                      <br />
                    <input type="submit" />
                </form>

            </Modal>
        </div>
    );
};

export default MyModal;