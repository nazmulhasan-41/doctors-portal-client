import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import ViewPrescriptSection from '../ViewPrescriptSection/ViewPrescriptSection';
import ViewReviewModal from './ViewReviewModal';
import './AddPrescript.css';


const AddPrescript = ({ apmnt, setApmnts, data, changeData }) => {

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

    const onSubmit = (data,e) => {

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

        e.target.reset();

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
    const [reloadVariable, setReloadVariable] = useState(0);
    const [serviceName,setServiceName]=useState();

    function openModal2() {
        setIsOpen2(true);
    }
    function closeModal2() {
        setIsOpen2(false);
    }
    useEffect(()=>{
        fetch(`http://localhost:5000/getServiceName/${apmnt.serviceId}`)
        .then(res=>res.json())
        .then(result=>{
            setServiceName(result.serviceName)
        })

    },[])

    return (
        <>

            <td>{serviceName}</td>
            <td>{apmnt.firstName}</td>
            <td>{apmnt.date}</td>
            <td>{apmnt.time}</td>
            <td>{apmnt.docEmail}</td>
            <td>
                {
                    apmnt.prescriptionFlag > 0 ?
                        <>
                            <ViewPrescriptSection apmnt={apmnt} serviceName={serviceName}></ViewPrescriptSection>

                        </>
                        :
                        <>
                            {
                                (doc_email && doc_email == apmnt.docEmail) ?

                                    <button style={{ width: '100%' }} onClick={openModal}>Add</button>
                                    :
                                    <>
                                        Not Added Yet
                                    </>
                            }
                        </>
                }

            </td>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='addPresField title'>    Service Name : {serviceName}<br /></div>
                    <div >    <textarea className='addPresField' placeholder='prescribe the patient' {...register("prescribeFields")} /></div>

                    <div className='submitAndClose'>
                        <div>    <input className='addPresField submit' type="submit" /></div>

                        <div >    <button className='addPresField close' onClick={closetHandler} >Close</button></div>
                    </div>

                </form>
            </Modal>
        </>
    );
};

export default AddPrescript;