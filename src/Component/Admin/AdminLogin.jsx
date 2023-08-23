import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons'

const baseUrl = 'http://127.0.0.1:8000/api';

function AdminLogin() {

    const [adminLoginData, setAdminLoginData] = useState({
        email: '',
        password: '',
    });

    const [errorMsg,setErrorMsg]=useState('');



    const handleChange = (event) => {
      setAdminLoginData({
            ...adminLoginData, [event.target.name]: event.target.value
        });
    }

    const submitForm = () => {
        const userFormData = new FormData();
        userFormData.append('email', adminLoginData.email)
        userFormData.append('password', adminLoginData.password)

        try {
            axios.post(baseUrl + '/admin-login', userFormData)
                .then((res) => {
                    if (res.data.bool === true) {
                        localStorage.setItem('adminLoginStatus', true)
                        localStorage.setItem('adminId', res.data.admin_id)
                        window.location.href = '/admin-dashboard';
                    }else{
                        setErrorMsg('Invalid Email Or Password')
                    }
                });

        } catch (error) {
            console.log(error);
        }
    }

    const userLoginStatus = localStorage.getItem('adminLoginStatus');
    if (userLoginStatus === 'true') {
        window.location.href = '/admin-dashboard';
    };

    useEffect(() => {
        document.title = 'Admin Login'
    })



    return (
        <div className="login-form container">
            <div className="screen">
                <div className="screen__content">
                    <div className="login">
                    {errorMsg && <h2 className="text-danger">{errorMsg}</h2>}

                    <h2> Admin Please Login </h2>
                        <div className="login__field">
                            <FontAwesomeIcon icon={faUserAlt} className='icon' />
                            <input type="text" className="login__input" placeholder="User Name / Email" name="email" value={adminLoginData.email} onChange={handleChange} />
                        </div>
                        <div className="login__field">
                            <FontAwesomeIcon icon={faLock} />
                            <input type="password" className="login__input" placeholder="Password" name="password" onChange={handleChange} value={adminLoginData.password}/>
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



export default AdminLogin;