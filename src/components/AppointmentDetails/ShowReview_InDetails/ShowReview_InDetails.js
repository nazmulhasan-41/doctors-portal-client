import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const ShowReview_InDetails = ({id,changeVariable}) => {

    const [reviews,setReviews]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/getReviews/${id}`)
        .then(response=>response.json())
        .then(result=>
            {
                console.log(result)
                setReviews(result)
            }
            )

    },[changeVariable]) 

    return (
        <div>
            <h1>Reviews</h1>
            <div>
                {
                    reviews.map(review=><li><SingleReview review={review}></SingleReview></li>)
                }

            </div>
        </div>
    );
};

export default ShowReview_InDetails;