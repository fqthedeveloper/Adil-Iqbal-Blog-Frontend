import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


function Login() {

    const [userLoginData, setuserLoginData] = useState({
        email: '',
        password: '',
    });

    const [errorMsg,setErrorMsg]=useState('');



    const handleChange = (event) => {
        setuserLoginData({
            ...userLoginData, [event.target.name]: event.target.value
        });
    }

    const submitForm = () => {
        const userFormData = new FormData();
        userFormData.append('email', userLoginData.email)
        userFormData.append('password', userLoginData.password)

        try {
            axios.post('/user-login', userFormData)
                .then((res) => {
                    if (res.data.bool === true) {
                        localStorage.setItem('userLoginStatus', true)
                        localStorage.setItem('userId', res.data.user_id)
                        window.location.href ='/user-dashboard';
                    }else{
                        setErrorMsg('Invalid Email Or Password')
                    }
                });

        } catch (error) {
            console.log(error);
        }
    }

    const userLoginStatus = localStorage.getItem('userLoginStatus');
    if (userLoginStatus === 'true') {
        window.location.href = '/user-dashboard';
    };

    useEffect(() => {
        document.title = 'User Login'
    })


    return (
        <div className="login-form container">
            <div className="screen">
                <div className="screen__content">
                    <div className="login">
                    {errorMsg && <h4 className="text-danger">{errorMsg}</h4>}

                    <h2>Please Login</h2>
                        <div className="login__field">
                            <FontAwesomeIcon icon={faUserAlt} className='icon' />
                            <input type="text" className="login__input" placeholder="User Name / Email" name="email" value={userLoginData.email} onChange={handleChange} />
                        </div>
                        <div className="login__field">
                            <FontAwesomeIcon icon={faLock} />
                            <input type="password" className="login__input" placeholder="Password" name="password" onChange={handleChange} value={userLoginData.password}/>
                        </div>
                        <button className="button login__submit">
                            <span className="button__text" type="submit" onClick={submitForm}>Log In Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>				
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>		
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>		
            </div>
        </div>
    )
}



export default Login;