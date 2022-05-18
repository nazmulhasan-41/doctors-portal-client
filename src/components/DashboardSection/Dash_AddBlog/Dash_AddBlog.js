import React from 'react';
import { useForm } from 'react-hook-form';
import './Dash_AddBlog.css';


const Dash_AddBlog = () => {

    const { register, handleSubmit, reset } = useForm();

    var doc_email=localStorage.getItem('doc_email');

    const onSubmit = (data,event) => {
        
        const blogData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        fetch('https://whispering-headland-20600.herokuapp.com/addBlog', blogData)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                reset();
            })
            .catch(error => {
                console.error('Error:', error);
            });
        event.target.reset();
        }

    return (
        <div>
            
            <h2 style={{marginBottom:'20px'}}> Add Blog</h2>
            <form onSubmit={handleSubmit(onSubmit)} >

                <input  className='addBlogInputClass' value={doc_email} {...register("docEmail", { required: true })} /><br /><br />
                <input className='addBlogInputClass' value={(new Date()).toDateString()} {...register("blogPublishDate", { required: true })} /><br /><br />
                <textarea className='addBlogInputClass blogField' style={{width:'100%',height:'200px'}} 
                placeholder='Write your blog...' {...register("blogText", { required: true })} /><br /><br />
               
                <br /><br />
                <input type="submit" />

            </form>


        </div>
    );
};

export default Dash_AddBlog;