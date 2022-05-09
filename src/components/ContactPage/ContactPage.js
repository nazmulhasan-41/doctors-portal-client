import React from 'react';
import Header from '../Header/Header';
import GoogleMapReact from 'google-map-react';
import GoogleMap from './GoogleMap';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const ContactPage = () => {


    return (
        <div>
            <Header></Header>

            <GoogleMap></GoogleMap>


        </div>
    );
};

export default ContactPage;