import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import AddReview_InDetails from './AddReview_InDetails/AddReview_InDetails';
import ShowReview_InDetails from './ShowReview_InDetails/ShowReview_InDetails';
import './AppointmentDetails.css';
import AddApmntApmntDetails from './AddApmntApmntDetails/AddApmntApmntDetails';


const AppointmentDetails = () => {

    const location = useLocation();
    //Get from singleCard.js
    const { state } = location;

    var { id } = useParams();

    const [changeVariable, setChangeVariable] = useState(0);
    const [appointmentDetails, setappointmentDetails] = useState({});
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/getAppmntAddedByDoc/${id}`)
            .then(response => response.json())
            .then(result => {

                setappointmentDetails(result)
            })

    }, [])
    useEffect(() => {
        console.log(appointmentDetails._id);
        fetch(`http://localhost:5000/getServiceName/${appointmentDetails.serviceId}`)
            .then(response => response.json())
            .then(result => {

                setService(result);
            })

    }, [appointmentDetails])


    return (

        <div className='ApoointmentPage_cls' style={{ backgroundImage: 'url(../../../../../images/appointment-bg.png)' }}>
            <Header></Header>

            <div className='detailsArea'>
                <div className='serviceClass1'>    {service.serviceName}<br /></div>

                <div className='serviceClass2'>   {service.serviceDescription}<br /></div>

                <div className='serviceClass3'>    doctor Email : {appointmentDetails.docEmail}<br /></div>
                <div className='serviceClass4'>   slots available : {appointmentDetails.slots}<br /></div>
                <div className='serviceClass5'>   Time : {appointmentDetails.time}</div>

            </div>

            <div className='reviewArea'>

                <div className='addbutton_Modal'>

                    <AddReview_InDetails
                        id={id}
                        changeVariable={changeVariable}
                        setChangeVariable={setChangeVariable}

                    ></AddReview_InDetails>

                    <AddApmntApmntDetails  state={state}></AddApmntApmntDetails>
                </div>


                {/* Add review section */}


                {/* show review section */}
                <ShowReview_InDetails
                    id={id}
                    changeVariable={changeVariable}
                    setChangeVariable={setChangeVariable}
                ></ShowReview_InDetails>

            </div>
        </div>

    );
};

export default AppointmentDetails;