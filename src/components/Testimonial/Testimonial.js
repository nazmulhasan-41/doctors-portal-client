import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Testimonial.css';
import people1 from '../../images/people-1.png';



const Testimonial = () => {
    const comments=[
        {
            id:1,
            name:'abcd',
            image:people1,
            comment:'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
            id:2,
            name:'abcd',
            image:people1,
            comment:'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
            id:3,
            name:'abcd',
            image:people1,
            comment:'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
    ]
    return (
        <div className='testimonial'>
            <h3 className='title_tm'>
                Testimonial

            </h3>
            <h5 className='subtitle_tm' >Whats our patients say</h5>
            <div>
                <Row className='row_testimonial'>
                    {
                        comments.map(cmnt=>(
                            <Col xs={12} md={3} className='col_testimonial'>

                        <Card className='cardClass' style={{   }}>
                            <Card.Body>
                                
                                <Card.Text>
                                    {cmnt.comment}
                                </Card.Text>
                                <div className='imageArea'>
                                    <img src={cmnt.image}></img>

                                <div className='userInfo'>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>

                                </div>

                                </div>
                                
                                
                            </Card.Body>
                        </Card>

                    </Col>


                        ))
                    }
                    

                </Row>


            </div>

        </div>
    );
};

export default Testimonial;