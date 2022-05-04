import React from 'react';
import Header from '../../Header/Header';
import Appointment from '../appointment/Appointment';
import Info from '../Info/Info';
import './FullHeader.css';

const FullHeader = () => {
    return (
        <div className='fullheader'>
            <Header></Header>
            <Appointment></Appointment>
            <Info></Info>
            
        </div>
    );
};

export default FullHeader;