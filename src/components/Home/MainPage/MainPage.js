import React from 'react';
import AppointmentHome from '../../AppointmentHome/AppointmentHome';
import Blog from '../../Blog/Blog';
import Care from '../../Care/Care';
import ContactUsForm from '../../ContactUsForm/ContactUsForm';
import Services from '../../services/Services';
import Testimonial from '../../Testimonial/Testimonial';
import Appointment from '../appointment/Appointment';
import FullHeader from '../FullHeader/FullHeader';

const MainPage = () => {
    return (
        <div>
            {/* <Appointment></Appointment>  */}


            <FullHeader> </FullHeader>
        <Services></Services>
        <Care></Care>
        <AppointmentHome> </AppointmentHome>
        <Testimonial></Testimonial>
        <Blog></Blog>
        <ContactUsForm></ContactUsForm>


            
        </div>
    );
};

export default MainPage;