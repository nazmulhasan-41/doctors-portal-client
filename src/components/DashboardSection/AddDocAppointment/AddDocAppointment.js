import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const AddDocAppointment = () => {

    const { register, handleSubmit } = useForm();
    var doc_email = localStorage.getItem('doc_email');

    const [allServices, setAllServices] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/getAllServices')
            .then(response => response.json())
            .then(result => {
                setAllServices(result)
                console.log(result)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [])

    const onSubmit = data => {
        console.log(data)

        const appmntData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        fetch('http://localhost:5000/addAppmntByDoc', appmntData)
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
            <h1>Add Appointment By doctor</h1>

            <form onSubmit={handleSubmit(onSubmit)} >
                <select {...register("serviceId",  { required: true })}>

                    {
                        allServices.map(service =>
                        (
                            <option value={service._id}>{service.serviceName}</option>

                        ))
                    }

                </select>
                <br /><br />

                <input placeholder='Doctor Name' value={doc_email} {...register("docEmail", { required: true })} /><br /><br />

                <input placeholder='Time' {...register("time", { required: true })} /><br /><br />

                <input placeholder='Slots' {...register("slots", { required: true })} /><br /><br />

                <br /><br />
                <input type="submit" />

            </form>


        </div>
    );
};

export default AddDocAppointment;