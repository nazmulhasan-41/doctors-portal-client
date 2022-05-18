import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const AddDocAppointment = () => {

    const { register, handleSubmit } = useForm();
    var doc_email = localStorage.getItem('doc_email');

    const [allServices, setAllServices] = useState([]);

    useEffect(() => {

        fetch('https://whispering-headland-20600.herokuapp.com/getAllServices')
            .then(response => response.json())
            .then(result => {
                setAllServices(result)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [])

    const onSubmit = (data,e) => {
        console.log(data)

        const appmntData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        fetch('https://whispering-headland-20600.herokuapp.com/addAppmntByDoc', appmntData)
            .then(response => response.json())
            .then(result => {
            })
            .catch(error => {
                console.error('Error:', error);
            });
        e.target.reset();
    }
    return (
        <div>
            <h1>Add Appointment By Doctor</h1>

            <form className='addApmntByDocForm' style={{marginTop:'30px'}} onSubmit={handleSubmit(onSubmit)} >
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