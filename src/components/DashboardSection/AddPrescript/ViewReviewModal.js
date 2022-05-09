import React from 'react';
import Modal from 'react-modal';

const ViewReviewModal = ({ apmnt, reviewLists, modalIsOpen2, closeModal2 }) => {
    console.log('apmnt:', apmnt, 'reviewLists:', reviewLists);
    return (
        <div>

            <Modal
                isOpen={modalIsOpen2}
                onRequestClose={closeModal2}
            >
                {
                    reviewLists.map(review => (
                        <>
                            <form  >
                                {review.appmntId} |   | 
                                {review.userEmail} |   | 
                                {review.patientReview}<br />

                            </form>



                        </>

                    ))
                }
                <button onClick={closeModal2} >Close</button>

            </Modal>

        </div>
    );
};

export default ViewReviewModal;