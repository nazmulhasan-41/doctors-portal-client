import React, { useState } from 'react';
import Header from '../../Header/Header';
import Calender from './Calender/Calender';
import './ApoointmentPage.css'
import AppointmentsAvailable from './APoointmentsAvailable/AppointmentsAvailable';


const AppointmentPage = () => {
    const [date,selectDate]=useState(new Date());
    

    return (
        <div className='ApoointmentPage_cls' style={{backgroundImage:'url(../../../../../images/appointment-bg.png)'}}>
            <Header></Header>
            <Calender selectDate={selectDate} ></Calender>
            <AppointmentsAvailable date={date} ></AppointmentsAvailable>
        </div>
    );
};

export default AppointmentPage;