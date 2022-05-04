import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Services.css';


const Services = () => {
    const services=[
        {
            id:1,
            name:'Teeth cleaning',
            des:'mg elements must have an alt pro',
            icon:''
        },
        {
            id:2,
            name:'Teeth Whitening',
            des:'ither with meaningful text, or an empty string for decorative imag',
            icon:''
        },
        {
            id:3,
            name:'Filling',
            des:'components ervices ervicesLine 4:11: services is assigned a',
            icon:''
        },
    ]
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
                                    {d.name}
                                </h3>
                                <h6 className='desservice' >
                                    {d.des}
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