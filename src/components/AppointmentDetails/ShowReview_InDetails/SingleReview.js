import React from 'react';

const SingleReview = ({review}) => {
    return (
        <>
            User: {review.userEmail} || Rating: {review.rating}
            <div>{review.reviewText}</div>
            
        </>
    );
};

export default SingleReview;