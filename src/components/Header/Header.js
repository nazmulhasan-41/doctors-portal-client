import React from 'react';
import {  Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    var email=localStorage.getItem('email');
    return (

        <Navbar className='navbar container' variant="light">
            <div className='headerContainer  '>


                <Navbar.Brand to="/">Sanatorium</Navbar.Brand>
                <Nav className="headersall ">
                    <Link className='headername' to="/">Home</Link>
                    <Link className='headername' to="/appointment">Appointment</Link>
                    
                    {
                        email ?
                        <>
                         
                        <Link className='headername ' to="/dashboard">Dashboard</Link>
                        <Link className='headername' to="/login">Logout</Link>
                        </>
                       
                        :
                        <Link className='headername' to="/login">Login</Link>
                    }
                    
                </Nav>



            </div>
        </Navbar>

    );
};

export default Header;