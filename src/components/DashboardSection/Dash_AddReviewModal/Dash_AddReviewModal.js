import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

const Dash_AddReviewModal = ({apmnt, reloadVariable,setReloadVariable}) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const { register, handleSubmit } = useForm();

    var email=localStorage.getItem('email');

    const onSubmit = data => {
        
        var patientReview=data.patientReview;

        var newData = { appmntId: apmnt._id, userEmail:email, patientReview };
        
        const prescriptData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        };

        fetch('http://localhost:5000/addReviewInAppointment', prescriptData)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                
                closeModal();
                setReloadVariable(reloadVariable+1);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
      
            <button onClick={openModal}>Add review</button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                 <form onSubmit={handleSubmit(onSubmit)} >
                    apoointment ID: {apmnt._id}<br />
                    <textarea placeholder='Give your Review... ' {...register("patientReview")} />

                    <input type="submit" />

                    <button onClick={closeModal} >Close</button>
                </form>
            </Modal>
        </div>
    );
};

export default Dash_AddReviewModal;