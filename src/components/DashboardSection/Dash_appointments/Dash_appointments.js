import React, { useEffect, useState } from 'react';
import D_calender from './D_calender/D_calender';
import './Dash_appointments.css';
import { Table } from 'react-bootstrap';
import Dash_appointmentListTable from './Dash_appointmentListTable/Dash_appointmentListTable';


const Dash_appointments = () => {
    var email = localStorage.getItem('email');
    var doc_email = localStorage.getItem('doc_email');

    const [myApmnt, setMyApmnt] = useState([]);
    const [selectedDate, onChange] = useState();

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

        var obj = { email: email ,date: selectedDate };
        if(doc_email){
            obj = {date: selectedDate};
        }
        var stringifyObj = JSON.stringify(obj);
        fetch(`http://localhost:5000/getAppointments/${stringifyObj}`)
            .then(data => data.json())
            .then(res => setMyApmnt(res))
    }, [])

    return (
        <div>
            <h1 className='title_d_apmnt'>My appointments
            {selectedDate && ' on'} {selectedDate} </h1>
            <div className='section1' style={{ /*display: 'flex',*/ }}>
                <div className='calenderClass' >
                    <D_calender selectDateHandler={selectDateHandler}></D_calender>

                </div>

                <Dash_appointmentListTable myApmnt={myApmnt}></Dash_appointmentListTable>

            </div>
        </div>
    );
};

export default Dash_appointments;