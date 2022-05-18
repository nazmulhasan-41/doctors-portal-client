import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';
import './ShowReview_inDetails.css'

const ShowReview_InDetails = ({id,changeVariable}) => {

    const [reviews,setReviews]=useState([]);

    useEffect(()=>{
        fetch(`https://whispering-headland-20600.herokuapp.com/getReviews/${id}`)
        .then(response=>response.json())
        .then(result=>
            {
               
                setReviews(result)
            }
            )

    },[changeVariable]) 

    return (
        <div>
            <h1>Reviews</h1>
            <div className='reviewsAll'>
                {
                    reviews.map(review=><><SingleReview review={review}></SingleReview></>)
                }

            </div>
        </div>
    );
};

export default ShowReview_InDetails;