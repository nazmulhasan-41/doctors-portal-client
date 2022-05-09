import React from 'react';
import { useForm } from 'react-hook-form';

const Dash_addService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

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
    }

    return (
        <div>
            <h1> Add services</h1>
            <form onSubmit={handleSubmit(onSubmit)} >

                <input placeholder='Service Name' {...register("serviceName", { required: true })} />
                <br /><br />
                <input placeholder='Service description' {...register("serviceDescription", { required: true })} />
                <br /><br />

                <input type="submit" />

            </form>

        </div>
    );
};

export default Dash_addService;