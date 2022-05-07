import React, { useEffect, useState } from 'react';

const Dash_prescriptions = () => {

    const [myPrescripts,setMyPrescripts]=useState([]);
    var email = localStorage.getItem('email');


    useEffect(()=>{
        var obj = { email: email };
        var stringifyObj = JSON.stringify(obj);

        fetch(`http://localhost:5000/getPrescripts/${stringifyObj}`)
            .then(data => data.json())
            .then(res => setMyPrescripts(res))

    },[]);

    return (
        <div>
            <h1>prescriptions</h1>
            {
                myPrescripts.map(prescripts=><li>{prescripts.firstName}</li>)
            }

        </div>
    );
};

export default Dash_prescriptions;