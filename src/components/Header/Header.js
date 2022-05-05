import React from 'react';
import {  Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (

        <Navbar className='navbar container' variant="light">
            <div className='headerContainer  '>


                <Navbar.Brand to="/">Navbar</Navbar.Brand>
                <Nav className="headersall ">
                    <Link className='headername' to="/">Home</Link>
                    <Link className='headername' to="/appointment">Appointment</Link>
                    <Link className='headername' to="/service">Dental Servise</Link>

                    <Link className='headername' to="/review">Review</Link>
                    <Link className='headername blog' to="/blog">Blog</Link>
                    <Link className='headername contactus' to="/contactus">Contact Us</Link>

                </Nav>



            </div>
        </Navbar>

    );
};

export default Header;