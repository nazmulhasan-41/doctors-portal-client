import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';


const AddReview_InDetails = ({id,changeVariable,setChangeVariable}) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const { register, handleSubmit } = useForm();
    


    var email = localStorage.getItem('email');
    var doc_email = localStorage.getItem('doc_email');


    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    const onSubmit = data => {
        console.log(data);

        var newData = {...data,docsAppmntId: id, userEmail:email };

        const insertedData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        };
        

        fetch('http://localhost:5000/addReview', insertedData)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                closeModal();
                setChangeVariable(changeVariable+1);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }


    return (
        <div>

            <button onClick={openModal}>Add Review</button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <form onSubmit={handleSubmit(onSubmit)} >

                    <textarea placeholder='prescribe the patient' {...register("reviewText")} />
                    <input placeholder='Rate in 5' {...register("rating")} />

                    <input type="submit" />

                    <button onClick={closeModal} >Close</button>
                </form>
            </Modal>

        </div>
    );
};

export default AddReview_InDetails;