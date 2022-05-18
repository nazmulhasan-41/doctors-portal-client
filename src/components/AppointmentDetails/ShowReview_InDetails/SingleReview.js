import React from 'react';
import './SingleReview.css'

const SingleReview = ({review}) => {
    return (
        <div className='singleReview'>
            <div className='nameRating'>
            <div className='userName'>{review.userEmail} </div><div className='ratingsection'> Rating: {review.rating}</div>

            </div>
            
            <div className='userReview'>{review.reviewText}</div>
            
        </div>
    );
};

export default SingleReview;