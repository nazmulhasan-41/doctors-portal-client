import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faLocationDot, faContactBook, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import './Info.css';


const Info = () => {
    const data = [{
        title: 'opening hour',
        subtitle: '24/7',
        icon: faDoorOpen
    },

    {
        title: 'location',
        subtitle: 'Motijhil , Dhaka , Bangladesh ',
        icon: faLocationDot

    },
    {
        title: 'contact us',
        subtitle: 'Mobile No: 012xxxxxxx',
        icon: faContactBook

    },
    ]
    return (
        <div>
            <Row className='rowinfo'>
                {
                    data.map(d => (
                        <Col className='cardinfo' xs={6} md={3}>
                            <div className='icon'>
                                <FontAwesomeIcon icon={d.icon} />
                            </div>

                            <div>
                                <div className='titleinfo'>
                                    {d.title}
                                </div>
                                <div className='subtitleinfo' >
                                    {d.subtitle}
                                </div>

                            </div>
                        </Col>
                    ))
                }

            </Row>

        </div>
    );
};

export default Info;