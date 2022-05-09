import { reload } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import Dash_AddReviewModal from '../Dash_AddReviewModal/Dash_AddReviewModal';
import ViewPrescriptSection from '../ViewPrescriptSection/ViewPrescriptSection';
import ViewReviewModal from './ViewReviewModal';

const AddPrescript = ({ apmnt, setApmnts, data, changeData }) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const { register, handleSubmit } = useForm();

    var email = localStorage.getItem('email');
    var doc_email = localStorage.getItem('doc_email');

    console.log(apmnt);

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

    const [reviewButtonState, setReviewButtonState] = useState('');
    const [modalIsOpen2, setIsOpen2] = React.useState(false);
    const [reviewLists, setReviewLists] = useState([]);
    const [reloadVariable,setReloadVariable]=useState(0);

    function openModal2() {
        setIsOpen2(true);
    }
    function closeModal2() {
        setIsOpen2(false);
    }

    useEffect(() => {

        fetch(`http://localhost:5000/getReviewInfo/${apmnt._id}`)
            .then(response => response.json())
            .then(result => {
                console.log('review result', result)
                if (result.length > 0) {
                    setReviewLists(result)

                    setReviewButtonState(
                        <>
                        <Dash_AddReviewModal 
                        apmnt={apmnt}
                         setReloadVariable={setReloadVariable}
                         reloadVariable={reloadVariable}
                         ></Dash_AddReviewModal>

                        <button onClick={openModal2} >View Review</button>
                        </>
                    )
                }
                else {
                    setReviewButtonState(<Dash_AddReviewModal 
                        apmnt={apmnt}
                        setReloadVariable={setReloadVariable}
                        reloadVariable={reloadVariable}

                        ></Dash_AddReviewModal>)
                }
            })
    }, [reloadVariable]);




    return (
        <>
            {apmnt._id} '  ' {apmnt.firstName}' ' {apmnt.date}' ' {apmnt.time}' '  {apmnt.prescriptionFlag}


            {
                apmnt.prescriptionFlag > 0 ?
                    <>
                        <ViewPrescriptSection apmnt={apmnt}></ViewPrescriptSection>
                        {reviewButtonState}
                    </>
                    :
                    <>
                        {
                            (doc_email && doc_email == apmnt.docEmail) ?

                                <button onClick={openModal}>Add Prescription</button>
                                :
                                <>
                                    {reviewButtonState}
                                    <button > Prescription Not Added Yet</button>
                                </>

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


            <ViewReviewModal

                apmnt={apmnt}
                reviewLists={reviewLists}
                openModal2={openModal2}
                closeModal2={closeModal2}
                modalIsOpen2={modalIsOpen2}

            >View Review</ViewReviewModal>

        </>
    );
};

export default AddPrescript;