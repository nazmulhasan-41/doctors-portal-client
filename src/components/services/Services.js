import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Services.css';


const Services = () => {
    const [services,setServices]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/getAllServices')
        .then(response=>response.json())
        .then(result=>setServices(result))
    },[]);

    // const services=[
    //     {
    //         id:1,
    //         name:'Teeth cleaning',
    //         des:'mg elements must have an alt pro',
    //         icon:''
    //     },
    //     
    // ]
    return (
        <div className='serviceArea'>
            <div className='heading_service'>
            <h2 className='serviceTitle' >Our Services</h2>
            <h4>Services We Provide</h4>

            </div>

            <Row className='row_service'>
                {
                    services.map(d => (
                        <Col className='cardservice' xs={6} md={3}>
                            <div className='iconservice'>
                                <FontAwesomeIcon icon={d.icon} />
                            </div>

                            <div>
                                <h3 className='nameservice'>
                                    {d.serviceName}
                                </h3>
                                <h6 className='desservice' >
                                    {(d.serviceDescription).substr(0,150)}
                                </h6>

                            </div>
                        </Col>
                    ))
                }

            </Row>


            
        </div>
    );
};

export default Services;