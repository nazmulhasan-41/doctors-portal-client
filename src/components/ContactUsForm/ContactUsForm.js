import React from 'react';
import { Container, Form } from 'react-bootstrap';
import './ContactUsForm.css';


const ContactUsForm = () => {
    return (
        <div className='ContactUsForm'>
            <div className='ct_header'>
                <h6 className='ct_title'> Contact Us</h6>
                <h3  className='ct_des'>COntact with us through below submission</h3>
            </div>
            <div className='ct_form' >
                <div className='formArea_ct'>
                <Form >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        
                        <Form.Control type="email" placeholder="Email address*" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        
                        <Form.Control type="subject" placeholder="Subject*" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        
                        <Form.Control as="textarea" rows={3} placeholder="Your Message*" />
                    </Form.Group>
                    <div className='submitBtn_ct'>
                    <button  className='ct_btn' >SUBMIT</button>

                    </div>

                    
                </Form>


                </div>

            </div>

        </div>
    );
};

export default ContactUsForm;