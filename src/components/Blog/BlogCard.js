import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import people2 from '../../images/people-2.png';

const BlogCard = ({blog}) => {

    const [doctorDetails,setDoctorDetails]=useState({});


    useEffect(()=>{
           //now fetch doctor details from doctor email
           fetch(`http://localhost:5000/getDoctorDetails/${blog.docEmail}`)
           .then(response=>response.json())
           .then(result=>{
            //    console.log('====',result)
               setDoctorDetails(result)  
               
           })
    },[])
    return (
        
        <Card className='blogCard' style={{ width: '15rem' }}>
        <Card.Body>

            <div className='imageArea_blog'>
                {/* <img className='image_blog' src={people2}></img> */}

                <div className='userInfo_blog'>
                    <Card.Title>{doctorDetails.doctorName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted blog">{doctorDetails.designation}</Card.Subtitle>

                </div>
            </div>
            <Card.Text className='blogCardtext'>
                {(blog.blogText).slice(0, 30)}
            </Card.Text>

        </Card.Body>
    </Card>
    );
};

export default BlogCard;