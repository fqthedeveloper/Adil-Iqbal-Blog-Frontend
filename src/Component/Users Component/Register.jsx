import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons'


function Register() {
    const [userData, setuserData] = useState({
        'first_name': '',
        'last_name': '',
        'email': '',
        'password': '',
        'status': '',
    });

    const handleChange = (event) => {
        setuserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    }

    const submitForm = () => {
        const userFormData = new FormData();
        userFormData.append("first_name", userData.first_name)
        userFormData.append("last_name", userData.last_name)
        userFormData.append("email", userData.email)
        userFormData.append("password", userData.password)


        try {
            axios.post('/user/', userFormData).then((response) => {
                setuserData({
                    'first_name': '',
                    'last_name': '',
                    'email': '',
                    'password': '',
                    'status': 'success',
                });
            });
        } catch (error) {
            console.log(error);
            setuserData({ 'status': 'error' })
        }
    };
    useEffect(()=> {
        document.title='User Register'
    })
    
    // const userLoginStatus=localStorage.getItem('userLoginStatus')
    // if(userLoginStatus==='true'){
    //     window.location.href='/user-dashboard';
    // }
     
    return (
            <div className="register-form container">
            <div className="screen">
                <div className="screen__content">
                
                    <div className="login">
                        
                    <h2>Please Register</h2>
                    {userData.status === 'success' && <h2 className='text-success'>Thanks For Your Registration</h2>}
                    {userData.status === 'error' && <h2 className='text-danger'>Something Wrong Happend</h2>}
                    <div className="login__field">
                            <FontAwesomeIcon icon={faUserAlt} />
                            <input type="text" className="login__input" placeholder="First Name"  onChange={handleChange} name="first_name" />
                        </div>
                        <div className="login__field">
                            <FontAwesomeIcon icon={faUserAlt} />
                            <input type="text" className="login__input" placeholder="Last Name" value={userData.last_name} onChange={handleChange} name="last_name" />
                        </div>

                        <div className="login__field">
                            <FontAwesomeIcon icon={faUserAlt} />
                            <input type="email" className="login__input" placeholder="Email" value={userData.email} onChange={handleChange} name="email" />
                        </div>
                        <div className="login__field">
                            <FontAwesomeIcon icon={faLock} />
                            <input type="password" className="login__input" placeholder="Password" value={userData.password} onChange={handleChange} name="password" />
                        </div>
                        <button className="button login__submit">
                            <span type="submit" onClick={submitForm} className="button__text">Register Now</span>
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


export default Register;