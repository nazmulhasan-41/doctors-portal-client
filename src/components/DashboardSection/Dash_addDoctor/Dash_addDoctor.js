import React from 'react';
import { useForm } from 'react-hook-form';

const Dash_addDoctor = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        const doctorData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        fetch('http://localhost:5000/addNewDoctor', doctorData)
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
            <h2> Add Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)} >

                <input placeholder='Doctor Name' {...register("doctorName", { required: true })} />
                <br /><br />
                <input type="submit" />

            </form>

        </div>
    );
};

export default Dash_addDoctor;