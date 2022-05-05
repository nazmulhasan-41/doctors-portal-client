import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const Modaltest = ({closeModal}) => {

  const { register, handleSubmit } = useForm();
  const onSubmit = data =>
  {
    console.log(data);
    closeModal();

  } 

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */


    <form className='formModal' onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} /><br />
      <input {...register("phoneno")} /><br />
      <input {...register("email")} /><br />
      <input {...register("date")} /><br />
      <select {...register("selectTime")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <br />
      <input type="submit" />
    </form>
  );
};

export default Modaltest;