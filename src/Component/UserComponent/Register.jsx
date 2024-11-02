import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [userData, setUserData] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        mobile_no: '',
        password: '',
        status: '',
    });

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

    const validateForm = () => {
        const errors = {};
        if (!userData.username) errors.username = 'Username will be UNIQUE';
        if (!userData.first_name) errors.first_name = 'First name is required';
        if (!userData.last_name) errors.last_name = 'Last name is required';
        if (!userData.email || !userData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            errors.email = 'Invalid email format';
        }
        if (!userData.mobile_no || userData.mobile_no.length < 10) {
            errors.mobile_no = 'Mobile number must be at least 10 digits';
        }
        if (!userData.password || userData.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const submitForm = () => {
        if (validateForm()) {
            const userFormData = new FormData();
            userFormData.append('username', userData.username);
            userFormData.append('first_name', userData.first_name);
            userFormData.append('last_name', userData.last_name);
            userFormData.append('email', userData.email);
            userFormData.append('mobile_no', userData.mobile_no);
            userFormData.append('password', userData.password);

            axios.post('/user/', userFormData)
                .then((response) => {
                    setUserData({
                        ...userData,
                        status: 'success',
                    });

                    setTimeout(() => {
                        navigate.push('/login');
                    }, 5000); // Redirect after 5000ms (5 seconds)
                })
                .catch((error) => {
                    console.log(error);
                    setUserData({ status: 'error' });
                });
        }
    };

    useEffect(() => {
        document.title = 'User  Register';
    }, []);

    return (
        <div className="register-form container">
            <div className="screen">
                <div className="screen__content">
                    <div className="Register">
                        <h2>Please Register</h2>
                        {userData.status === 'success' && <h2 className='text-success'>Thanks For Your Registration</h2>}
                        {userData.status === 'error' && <h2 className='text-danger'>Something Wrong Happened</h2>}

                        <div className="Register__field">
                            <FontAwesomeIcon icon={faUserAlt} />
                            <input
                                type="text"
                                className="Register__input"
                                placeholder="User  Name"
                                onChange={handleChange}
                                name="username"
                                value={userData.username}
                            />
                            {errors.username && <div className="error">{errors.username}</div>}
                        </div>
                        
                        <div className="Register__field">
                            <FontAwesomeIcon icon={faUserAlt} />
                            < input
                                type="text"
                                className="Register__input"
                                placeholder="First Name"
                                onChange={handleChange}
                                name="first_name"
                                value={userData.first_name}
                            />
                            {errors.first_name && <div className="error">{errors.first_name}</div>}
                        </div>

                        <div className="Register__field">
                            <FontAwesomeIcon icon={faUserAlt} />
                            <input
                                type="text"
                                className="Register__input"
                                placeholder="Last Name"
                                onChange={handleChange}
                                name="last_name"
                                value={userData.last_name}
                            />
                            {errors.last_name && <div className="error">{errors.last_name}</div>}
                        </div>

                        <div className="Register__field">
                            <FontAwesomeIcon icon={faUserAlt} />
                            <input
                                type="email"
                                className="Register__input"
                                placeholder="Email"
                                onChange={handleChange}
                                name="email"
                                value={userData.email}
                            />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>

                        <div className="Register__field">
                            <FontAwesomeIcon icon={faUserAlt} />
                            <input
                                type="text"
                                className="Register__input"
                                placeholder="Mobile No"
                                onChange={handleChange}
                                name="mobile_no"
                                value={userData.mobile_no}
                            />
                            {errors.mobile_no && <div className="error">{errors.mobile_no}</div>}
                        </div>

                        <div className="Register__field">
                            <FontAwesomeIcon icon={faLock} />
                            <input
                                type="password"
                                className="Register__input"
                                placeholder="Password"
                                onChange={handleChange}
                                name="password"
                                value={userData.password}
                            />
                            {errors.password && <div className="error">{errors.password}</div>}
                        </div>

                        <button className="button Register__submit" onClick={submitForm}>
                            <span className="button__text">Register Now</span>
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
    );
}

export default Register;