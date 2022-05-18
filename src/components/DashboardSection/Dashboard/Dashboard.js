import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import Dash_appointmentListTable from '../Dash_appointments/Dash_appointmentListTable/Dash_appointmentListTable';
import './Dashboard.css';


const Dashboard = () => {

    var email = localStorage.getItem('email');
    var doc_email = localStorage.getItem('doc_email');


    const [myApmnt, setMyApmnt] = useState([]);
    const [todayDate, setTodayDate] = useState(new Date());
    const [todaysCount, setTodaysCount] = useState();

    useEffect(() => {

        var obj = { email: email };
        var stringifyObj = JSON.stringify(obj);
        if (doc_email) {
            obj = {};
            stringifyObj = JSON.stringify(obj);
        }

        fetch(`https://whispering-headland-20600.herokuapp.com/getAppointments/${stringifyObj}`)
            .then(data => data.json())
            .then(res => {
                setMyApmnt(res)
                var dateString = todayDate.toDateString();
                var allApmnt = res.filter(apm => apm.date == dateString)
                setTodaysCount(allApmnt.length)
            }
            )
    }, []);

    return (
        <>
            <h1 className='dashboardTitle'>dashboard</h1>
            <div style={{ marginBottom: '20px' }}>
                <h4>Total appointments: {myApmnt.length}</h4>
                <h4>Today's appointment: {todaysCount}</h4>

            </div>

            <Dash_appointmentListTable myApmnt={myApmnt} ></Dash_appointmentListTable>
            

        </>
    );
};

export default Dashboard;
