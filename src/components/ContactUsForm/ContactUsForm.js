import React from 'react';
import { Container, Form } from 'react-bootstrap';
import './ContactUsForm.css';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactUsForm = () => {

    var YOUR_SERVICE_ID = 'service_p8mwq9d';
    var YOUR_TEMPLATE_ID = 'template_9z7omfj';
    var YOUR_PUBLIC_KEY = 'wlSIobtRL_5xbfBEl';

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('eee--------', form.current)

        emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    }

    return (
        <div className='ContactUsForm'>
            <div className='ct_header'>
                <h6 className='ct_title'> Contact Us</h6>
                <h3 className='ct_des'>COntact with us through below submission</h3>
            </div>
            <div className='ct_form' >
                <div className='formArea_ct'>

                        <form className='contactForm' ref={form} onSubmit={sendEmail}>

                           
                            <input  className='formInputField' type="text" name="from_name" placeholder='Your name' />


                            
                            <input  className='formInputField' type="text" name="from_email"  placeholder='Your Email' />

                            <input  className='formInputField' type="text" name="from_subject"  placeholder='Your Email Subject' />
                           
                            <textarea  className='formInputField' name="from_message"  placeholder='Message...' />
                            <div className='btnClassEmail'>
                            <input  className='formInputField submitbutton' type="submit" value="Send" />
                            
                            </div>
                            


                        </form>

                </div>

            </div>

        </div>
    );
};

export default ContactUsForm;