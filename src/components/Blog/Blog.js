import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Blog.css';
import people2 from '../../images/people-2.png';
import './Blog.css';

const Blog = () => {
    const blogNews=[
        {
            id:1,
            title:'',
            des:'',
            docname:'',
            date:'',
            image:people2,
        },
        {
            id:2,
            title:'',
            des:'',
            docname:'',
            date:'',
            image:people2,
        },
        {
            id:3,
            title:'',
            des:'',
            docname:'',
            date:'',
            image:people2,
        },
    ]
    return (
        
    <div className='blog'>
        <h6 className='title_blog'>
            Our Blog

        </h6>
        <h5 className='subtitle_blog' >From our Blog News</h5>
        <div>
            <Row className='row_blog'>
                {
                    blogNews.map(blog=>(

                        <Col xs={12} md={3} className='col_blog'>


                    <Card style={{ width: '15rem' }}>
                        <Card.Body>

                        <div className='imageArea_blog'>
                                <img  className='image_blog' src={blog.image}></img>

                            <div className='userInfo_blog'>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted blog">Card Subtitle</Card.Subtitle>

                            </div>

                            </div>


                            
                            <Card.Text className='blogCardtext'>
                                    jhjhgjhgjhhg gjhgjhghjjhghjghghg ghghg hghghghg
                            </Card.Text>
                            
                            
                            
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

export default Blog;