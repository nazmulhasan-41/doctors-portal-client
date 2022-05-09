import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import AddReview_InDetails from './AddReview_InDetails/AddReview_InDetails';
import ShowReview_InDetails from './ShowReview_InDetails/ShowReview_InDetails';

const AppointmentDetails = () => {
    var { id } = useParams();

    const [changeVariable, setChangeVariable]=useState(0);

    const [serviceDetails, setServiceDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/getAppmntAddedByDoc/${id}`)
            .then(response => response.json())
            .then(result => setServiceDetails(result))

    }, [])


    return (

        <div className='ApoointmentPage_cls' style={{ backgroundImage: 'url(../../../../../images/appointment-bg.png)' }}>
            <Header></Header>

            <div className='detailsArea'>
                serviceId: {serviceDetails.serviceId}<br />
                doctor Email : {serviceDetails.docEmail}<br />
                slots available : {serviceDetails.slots}<br />
                Time : {serviceDetails.time}

            </div>

            <div className='reviewArea'>

                {/* Add review section */}
                <AddReview_InDetails
                 id={id}
                 changeVariable={changeVariable}
                 setChangeVariable={setChangeVariable}
                 
                 ></AddReview_InDetails>



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