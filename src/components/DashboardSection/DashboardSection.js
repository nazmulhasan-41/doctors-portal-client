import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Dash_header from './Dash_header/Dash_header';
import './DashboardSection.css';


const DashboardSection = () => {
    var email = localStorage.getItem('email');
    var doc_email = localStorage.getItem('doc_email');

    const [userType,setUserType]=useState('');
    useEffect(()=>{
        if(email)
        {
            setUserType('Patient')
        }
        else{
            setUserType('Doctor')
        }
    },[])

    return (
        <div>
            <Header></Header>

            User Mode : {userType}
            
            <Row >
                <Col className='Dash_header'>
                    <Dash_header></Dash_header>
                </Col>
                <Col><Outlet /></Col>
                
            </Row>



            
        </div>
    );
};

export default DashboardSection;