import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import './ViewPrescriptSection.css';



const ViewPrescriptSection = ({ apmnt,serviceName }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const [prescript, setPrescript] = useState({})

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    console.log(apmnt)

    function openModal() {
        setIsOpen(true);

        fetch(`https://whispering-headland-20600.herokuapp.com/getPrescript/${apmnt._id}`)
            .then(response => response.json())
            .then(result => { setPrescript(result) })
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>

            <button className='viewReportClass' onClick={openModal}>View </button>

        
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <form >
                   
                <div className='prescriptField serviceName'>   {serviceName} <br/></div>
                <div className='prescriptField' >    {prescript.prescribeFields} <br/> <br/></div>

                    <button onClick={closeModal} >Close</button>
                </form>
            </Modal>
        </div>
    );
};

export default ViewPrescriptSection;