import React from 'react';
import { useForm } from 'react-hook-form';
import './Dash_addService.css';

const Dash_addService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data,e) => {

        const serviceData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        fetch('http://localhost:5000/addNewService', serviceData)
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.error('Error:', error);
            });
        e.target.reset();
    }

    return (
        <div>
            <h1> Add Services</h1>
            <form className='addServiceFormClass' onSubmit={handleSubmit(onSubmit)} >

                <input placeholder='Service Name' {...register("serviceName", { required: true })} />
                <br /><br />
                <textarea style={{width:'100%',height:'200px'}} placeholder='Service description' {...register("serviceDescription", { required: true })} />
                <br /><br />

                <input type="submit" />

            </form>

        </div>
    );
};

export default Dash_addService;