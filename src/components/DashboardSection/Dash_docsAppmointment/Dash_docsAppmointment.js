import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AppmntsDocWIthPatient from '../AppmntsDocWIthPatient/AppmntsDocWIthPatient';
import D_calender from '../Dash_appointments/D_calender/D_calender';
import './Dash_docsAppmointment.css';


const Dash_docsAppmointment = () => {

    var doc_email = localStorage.getItem('doc_email');

    const [myApmnt, setMyApmnt] = useState([]);
    const [selectedDate, onChange] = useState();

    const fetchFunction = (stringifyObj) => {

        fetch(`https://whispering-headland-20600.herokuapp.com/getAppointments/${stringifyObj}`)
            .then(data => data.json())
            .then(res => {

                var filteredAppointment = res.filter(apm => apm.docEmail == doc_email)
                setMyApmnt(filteredAppointment)

            })
    }

    const selectDateHandler = (date) => {

        onChange(date.toDateString());
        var obj = { date: date.toDateString() };

        var stringifyObj = JSON.stringify(obj);
        fetchFunction(stringifyObj);
    }

    useEffect(() => {

        var obj = {};
        var stringifyObj = JSON.stringify(obj);
        fetchFunction(stringifyObj);
    }, [])


    return (
        <div>
            <h3 className='docApmntClass'>Doctor Appointments</h3>

            <h5 className='docApmntsClass'>My appointments {selectedDate && 'on'}  {selectedDate} </h5>
            <div className='section1' style={{ display: 'block', }}>
                <div className='calenderDoc'>
                    <D_calender selectDateHandler={selectDateHandler}></D_calender>

                </div>
                <div className='apmntsDoc' style={{ marginLeft: '10px' }}>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th> Patient Name</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Age</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (myApmnt.length == 0) ? 'No Appointment Available' : ''
                            }

                            {
                                myApmnt.map(apmnt => <tr>
                                    {

                                        <AppmntsDocWIthPatient apmnt={apmnt}></AppmntsDocWIthPatient>

                                    }
                                </tr>

                                )
                            }

                        </tbody>
                    </Table>

                </div>
            </div>
        </div>
    );
};

export default Dash_docsAppmointment;