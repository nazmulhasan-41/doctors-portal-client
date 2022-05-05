import React from 'react';
import { ModalTitle } from 'react-bootstrap';

import Modal from 'react-modal';
import Modaltest from '../APoointmentsAvailable/Modaltest';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');


const MyModal = ({ serviceName, closeModal, modalIsOpen }) => {

    console.log(serviceName);

    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 >{serviceName}</h2>
                <button onClick={closeModal}>Send</button>
                <Modaltest></Modaltest>

              
            </Modal>

        </div>

    );
};

export default MyModal;