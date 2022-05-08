import { reload } from 'firebase/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import ViewPrescriptSection from '../ViewPrescriptSection/ViewPrescriptSection';

const AddPrescript = ({ apmnt, setApmnts, data, changeData }) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    var email = localStorage.getItem('email');
    var doc_email = localStorage.getItem('doc_email');

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const onSubmit = data => {

        var newData = { _id: apmnt._id, prescriptionFlag: 1 };
        var newPrescript = { _id: apmnt._id, ...data }

        //change the prescription flag to =1
        //update appointment

        const updationData = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        };
        const prescriptData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPrescript)
        };

        fetch('http://localhost:5000/updateAppointment', updationData)
            .then(response => response.json())
            .then(result => {


                fetch('http://localhost:5000/addPrescript', prescriptData)
                    .then(response => response.json())
                    .then(result => {

                    })
                //loading prescription page  by changing data vlaue
                changeData(data + 1);
                closeModal();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    const closetHandler = () => {
        closeModal();
    }


    return (
        <div>
            {apmnt._id}
            {apmnt.firstName}
            {apmnt.date}
            {apmnt.time}
            {apmnt.age}

            {
                apmnt.prescriptionFlag > 0 ?
                    <ViewPrescriptSection apmnt={apmnt}></ViewPrescriptSection>

                    :
                    <>
                    {
                        doc_email ? 
                    
                        <button onClick={openModal}>Add Prescription</button>
                        :
                        <button > Prescription Not Added Yet</button>
                    }
                    </>

            }

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <form onSubmit={handleSubmit(onSubmit)} >
                    apoointment ID: {apmnt._id}<br />
                    <textarea placeholder='prescribe the patient' {...register("prescribeFields")} />

                    <input type="submit" />

                    <button onClick={closetHandler} >Close</button>
                </form>
            </Modal>




        </div>
    );
};

export default AddPrescript;