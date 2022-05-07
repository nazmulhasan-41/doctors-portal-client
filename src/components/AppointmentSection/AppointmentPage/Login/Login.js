import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../../Header/Header';

const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);

const Login = () => {

    const [loggedEmail, setLoggedEmail] = useState(localStorage.getItem("email"));
    const navigate = useNavigate();

    const signInHandler = () => {

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;

                setLoggedEmail(user.email);
                localStorage.setItem("email", user.email);
                
                navigate(-1);


            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    const signOutHandler=()=>{
        localStorage.setItem("email", '');
        setLoggedEmail('');
    }
    const doctorSignInHandler=()=>{
        navigate('doctorlogin')
        
    }
    return (
        <div>
            <Header></Header>
            {
                loggedEmail
            }
            {
                loggedEmail ?
                <button onClick={signOutHandler}> Log out</button>:
                <button onClick={signInHandler}> Google sign In</button>

            }
            <button onClick={doctorSignInHandler}> Doctor sign In</button>
            <Outlet/>

            
            



        </div>
    );
};

export default Login;