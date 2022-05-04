import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faLocationDot, faContactBook, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import './Info.css';


const Info = () => {
    const data = [{
        title: 'opening hour',
        subtitle: 'aaaaaaaaaaaaas dsd sa ds ad asd sa d asd',
        icon: faDoorOpen
    },

    {
        title: 'location',
        subtitle: 'sdsdsdsd s d sd s ds d sd sd s ds ds ',
        icon: faLocationDot

    },
    {
        title: 'contact us',
        subtitle: 'lllllll sd s dddasasas       dsdsd  ds d sd sd sd s ds ds d sd s ds d',
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