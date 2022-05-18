import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Blog.css';

import './Blog.css';
import BlogCard from './BlogCard';

const Blog = () => {

    const [blogNews,setBlogNews]=useState([]);
    

    useEffect(()=>{
        fetch('http://localhost:5000/getAllBlogs')
        .then(response=>response.json())
        .then(result=>{
            setBlogNews(result)

                    
        })
    })

    return (

        <div className='blog'>
            <h6 className='title_blog'>
                Our Blog

            </h6>
            <h5 className='subtitle_blog' >From our Blog News</h5>
            <div>
                <Row className='row_blog'>
                    {
                        blogNews.map(blog => (

                            <Col xs={12} md={3} className='col_blog'>


                            <BlogCard blog={blog}  ></BlogCard>

                            </Col>

                        ))
                    }

                </Row>
            </div>

        </div>
    );
};

export default Blog;