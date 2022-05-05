import React from 'react';
import { ModalTitle } from 'react-bootstrap';

import Modal from 'react-modal';
import Modaltest from '../APoointmentsAvailable/Modaltest';
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


const MyModal = ({ serviceName, closeModal, modalIsOpen , date}) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
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
                <h2 >{serviceName}</h2>
               

                <form className='formModal' onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("firstName")} /><br />
                    <input  {...register("phoneno")} /><br />
                    <input {...register("email")} /><br />
                    <input defaultValue={date.toDateString()} {...register("date")} /><br />
                    <input {...register("age")} /><br />
                    <select  label="Age" {...register("selectTime")}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                    <br />
                    <input type="submit" />
                </form>


            </Modal>

        </div>

    );
};

export default MyModal;