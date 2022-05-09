import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import Dash_AddReviewModal from '../Dash_AddReviewModal/Dash_AddReviewModal';



const ViewPrescriptSection = ({ apmnt }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const [prescript, setPrescript] = useState({})

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    console.log(apmnt)

    function openModal() {
        setIsOpen(true);

        fetch(`http://localhost:5000/getPrescript/${apmnt._id}`)
            .then(response => response.json())
            .then(result => { setPrescript(result) })
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>

            <button onClick={openModal}>View prescription</button>

            

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <form >
                    {/* apoointment ID: {apmnt._id}<br /> */}
                    {prescript._id} <br/>
                    {prescript.prescribeFields} <br/> <br/>

                    <button onClick={closeModal} >Close</button>
                </form>
            </Modal>
        </div>
    );
};

export default ViewPrescriptSection;