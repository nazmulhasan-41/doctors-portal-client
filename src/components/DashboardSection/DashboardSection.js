import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Dash_header from './Dash_header/Dash_header';
import './DashboardSection.css';


const DashboardSection = () => {
    return (
        <div>
            <Header></Header>
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