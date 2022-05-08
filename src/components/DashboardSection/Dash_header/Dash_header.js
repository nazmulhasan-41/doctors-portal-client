import React from 'react';
import { Col, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Dash_header.css'

const Dash_header = () => {
    var doc_email = localStorage.getItem('doc_email');

    return (
        <>
            <div className=' dash_header '>

                <Nav className="flex-column  ">
                    <Link className='dash_headername' to="d_dashboard">Dashboard</Link>
                    <Link className='dash_headername' to="d_appnm">Appointments</Link>
                    <Link className='dash_headername' to="d_pres">Prescriptions</Link>
                    {
                        doc_email ?
                            <>
                            <Link className='dash_headername' to="d_docsAppmnt">My Appointments</Link>
                                <Link className='dash_headername' to="d_addService">Add service</Link>
                                <Link className='dash_headername' to="d_addDoctor">Add Doctor</Link>
                                <Link className='dash_headername' to="d_addDocAppmnt">Add Appointment By Doctor</Link>

                            </>
                            :
                            ''
                    }
                </Nav>

            </div>
        </>
    );
};

export default Dash_header;