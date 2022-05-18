import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import './AddReview_InDetails.css'


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
        

        fetch('https://whispering-headland-20600.herokuapp.com/addReview', insertedData)
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

            <button className='AddreviewClass' onClick={openModal}>Add Review</button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <form className='modalFormToAddReview' onSubmit={handleSubmit(onSubmit)} >

                <div  className='modelFieldClass'>    <textarea className='modalField' placeholder='Write tour Review' {...register("reviewText")} /><br/><br/></div>
                <div className='modelFieldClass'>    <input className='modalField rating' placeholder='Rate in 5' {...register("rating")} /><br/><br/></div>
            <div className='submitClose'>
            <div className='modelFieldClass submit'>    <input className='modalField submit' type="submit" /></div>
            <div className='modelFieldClass'>    <button className='modalField close' onClick={closeModal} >Close</button></div>

            </div>
                
                </form>
            </Modal>

        </div>
    );
};

export default AddReview_InDetails;