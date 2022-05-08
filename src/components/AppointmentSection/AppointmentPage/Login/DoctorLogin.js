import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DoctoreLogin.css';


const DoctorLogin = () => {
    const [userInfo,setUserInfo]=useState({});
    const navigate=useNavigate();
    

    const docLoginHandler=(e)=>{
        e.preventDefault();

        var stringifyObj = JSON.stringify(userInfo);

        fetch(`http://localhost:5000/doctorlogin/${stringifyObj}`)
            .then(data => data.json())
            .then(res => {
                // res.email? 
              localStorage.setItem('doc_email',res.email);
              navigate('/')
              
             
            })

    }
    const onChangeHandler=(e)=>{
        
        if(e.target.name=== 'userID')
        {
            var newUser={email : e.target.value};
            var updatedUser={...userInfo, ...newUser};
            setUserInfo(updatedUser);
        }
        else{
            var newUser={password:e.target.value};
            var updatedUser={...userInfo, ...newUser};
            setUserInfo(updatedUser);

        }
    }

    return (
        <div className='doctorLogin'>

            <form >

                <input style={{ marginTop: '10px' }} onChange={onChangeHandler} className='formField' placeholder='User ID' type="text" id="fname" name="userID" /><br />

                <input style={{ marginTop: '10px' }} onChange={onChangeHandler} className='formField' placeholder='Password' type="text" id="lname" name="password" /><br /><br />
                <input type="submit" value="Login" onClick={docLoginHandler} />
            </form>

        </div>
    );
};

export default DoctorLogin;