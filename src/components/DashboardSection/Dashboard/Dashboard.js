import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const Dashboard = () => {

    var email = localStorage.getItem('email');
    var doc_email=localStorage.getItem('doc_email');

    const [myApmnt, setMyApmnt] = useState([]);
    const [todayDate, setTodayDate] = useState(new Date());
    const [todaysCount, setTodaysCount] = useState();

    useEffect(() => {

        var obj = { email: email };
        var stringifyObj = JSON.stringify(obj);
        if(doc_email){
            obj = {};
            stringifyObj = JSON.stringify(obj);
    }

    fetch(`http://localhost:5000/getAppointments/${stringifyObj}`)
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
            <h1>dashboard</h1>
            <h4>Total appointments: {myApmnt.length}</h4>
            <h4>Today's appointment: {todaysCount}</h4>
            {
                myApmnt.map(apmnt => (
                    <>
                        <Row>
                            <Col>{apmnt.firstName}</Col>
                            <Col>{apmnt.time}</Col>
                            <Col>{apmnt.phoneno}</Col>
                            <Col>{apmnt.date}</Col>
                            <Col>{apmnt.serviceName}</Col>
                            <Col>{apmnt.age}</Col>
                        </Row>
                    </>
                )
            )
        }
        </>
    );
};

export default Dashboard;
