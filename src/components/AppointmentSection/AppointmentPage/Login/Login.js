import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../../Header/Header';
import './Login.css';


const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);

const Login = () => {

    const [loggedEmail, setLoggedEmail] = useState(localStorage.getItem("email") || localStorage.getItem("doc_email"));
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
    const signOutHandler = () => {
        localStorage.setItem("email", '');
        localStorage.setItem("doc_email", '');
        setLoggedEmail('');
    }
    const doctorSignInHandler = () => {
        navigate('doctorlogin')

    }
    return (
        <div>
            <Header></Header>
            <div className='loginClass'>
                <div className='loggedEmail' style={{marginBottom:'20px'}}>
                    {
                        loggedEmail
                    }
                </div>

                {
                    loggedEmail ?
                        <div ><button className='logAction' onClick={signOutHandler}> Log out</button></div>

                        :
                        <>
                            <div className='logoutLoginClassSection'>
                                <button className='logAction' onClick={signInHandler}> Google sign In</button>
                                <button className='logAction' onClick={doctorSignInHandler}> Doctor sign In</button>
                            </div>

                        </>
                }

            </div>


            <Outlet />
        </div>
    );
};

export default Login;