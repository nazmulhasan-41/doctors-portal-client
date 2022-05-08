import React, { useEffect, useState } from 'react';
import D_calender from './D_calender/D_calender';

const Dash_appointments = () => {
    var email = localStorage.getItem('email');
    var doc_email = localStorage.getItem('doc_email');

    const [myApmnt, setMyApmnt] = useState([]);
    const [selectedDate, onChange] = useState('');
    const selectDateHandler = (date) =>
    {

        onChange(date.toDateString());
        var obj = { date: date.toDateString(), email: email };
        if(doc_email){
            obj = { date: date.toDateString() };
        }
        var stringifyObj = JSON.stringify(obj);

        fetch(`http://localhost:5000/getAppointments/${stringifyObj}`)
            .then(data => data.json())
            .then(res => setMyApmnt(res))
    }

    useEffect(() => {

        var obj = { email: email };
        if(doc_email){
            obj = {};
        }
        var stringifyObj = JSON.stringify(obj);
        fetch(`http://localhost:5000/getAppointments/${stringifyObj}`)
            .then(data => data.json())
            .then(res => setMyApmnt(res))
    }, [])

    return (
        <div>
            <h1>My appointments on :  </h1>{selectedDate}
            <div className='section1' style={{display: 'flex', }}>
                <div style={{width:'60%'}}>
                    <D_calender selectDateHandler={selectDateHandler}></D_calender>

                </div>
                <div style={{marginLeft:'10px'}}>
                    {
                        myApmnt.map(apmnt => <li>
                            {apmnt.firstName}
                            {apmnt.date} 
                        
                        </li>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Dash_appointments;