import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './MyModal.css';


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
    const onSubmit = (data,e) => {
        var serviceId=apnmt.serviceId;
        var docEmail=apnmt.docEmail;
        var time=apnmt.time;
        var slots=apnmt.slots;
        var newApnmt={serviceId,docEmail,time,slots}

        var newData={...data, email, ...newApnmt , prescriptionFlag:0};

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        };
        
        e.target.reset();

        fetch('https://whispering-headland-20600.herokuapp.com/addAppointment', requestOptions)
            .then(response => response.json())
            .then(res => console.log(res) );
        e.target.reset();
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
                <div >    <input className='modalInputField' placeholder='Patients name' {...register("firstName")} /><br /></div>
                <div >    <input className='modalInputField' placeholder='Phone No' {...register("phoneno")} /><br /></div>
                <div>    <input className='modalInputField' defaultValue={date.toDateString()} {...register("date")} /><br /></div>
                <div >    <input className='modalInputField' placeholder='Age' {...register("age")} /><br /></div>
                <div >    <input className='modalInputField' placeholder='Weight' {...register("weight")} /><br /></div>
                     
                <div className='modalInputField'>    <input type="submit" /></div>
                </form>

            </Modal>
        </div>
    );
};

export default MyModal;