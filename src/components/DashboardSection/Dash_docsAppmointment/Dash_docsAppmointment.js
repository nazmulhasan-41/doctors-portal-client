import React, { useEffect, useState } from 'react';
import AppmntsDocWIthPatient from '../AppmntsDocWIthPatient/AppmntsDocWIthPatient';
import D_calender from '../Dash_appointments/D_calender/D_calender';

const Dash_docsAppmointment = () => {

    var doc_email = localStorage.getItem('doc_email');

    const [myApmnt, setMyApmnt] = useState([]);
    const [selectedDate, onChange] = useState((new Date()).toDateString());

    const selectDateHandler = (date) =>
    {

        onChange(date.toDateString());
        var obj = { date: date.toDateString() };
        
        var stringifyObj = JSON.stringify(obj);

        fetch(`http://localhost:5000/getAppointments/${stringifyObj}`)
            .then(data => data.json())
            .then(res => {
                console.log(res)

                
                    var filteredAppointment=res.filter(apm=>apm.docEmail==doc_email)
                    console.log(filteredAppointment)
                    setMyApmnt(filteredAppointment)

                

            })
    }

    useEffect(() => {

        var obj = {};
        
        var stringifyObj = JSON.stringify(obj);
        fetch(`http://localhost:5000/getAppointments/${stringifyObj}`)
            .then(data => data.json())
            .then(res => {
                
                    var filteredAppointment=res.filter(apm=>apm.docEmail==doc_email)
                    setMyApmnt(filteredAppointment)

            })
    }, [])



    return (
        <div>
            <h3>My Appointments</h3>


            <h1>My appointments with patients  on :  </h1> {selectedDate} <h1>are</h1> 
            <div className='section1' style={{display: 'flex', }}>
                <div style={{width:'60%'}}>
                    <D_calender selectDateHandler={selectDateHandler}></D_calender>

                </div>
                <div style={{marginLeft:'10px'}}>
                    {
                        myApmnt.map(apmnt => <li>
                            {
                                
                                
                                
                                <AppmntsDocWIthPatient apmnt={apmnt}></AppmntsDocWIthPatient>
                                

                            }
                            </li>
                                                     
                      )
                    }

                </div>
            </div>



        </div>
    );
};

export default Dash_docsAppmointment;