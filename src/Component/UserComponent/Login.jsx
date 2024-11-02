import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [userLoginData, setUserLoginData] = useState({
        email: '',
        password: '',
    });
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setUserLoginData({
            ...userLoginData, [event.target.name]: event.target.value
        });
    };

    const submitForm = async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Basic validation
        if (!userLoginData.email || !userLoginData.password) {
            setErrorMsg('Email and Password are required');
            return;
        }

        setLoading(true); // Set loading state

        const userFormData = new FormData();
        userFormData.append('email', userLoginData.email);
        userFormData.append('password', userLoginData.password);

        try {
            const res = await axios.post('/user-login', userFormData);
            if (res.data.bool === true) {
                localStorage.setItem('userLoginStatus', true);
                localStorage.setItem('userId', res.data.user_id);
                setTimeout(() => {
                    navigate('/login'); // Redirect to login page after successful login
                    window.location.reload(); // Refresh the page automatically
                }, 1000); // Delay to show success before redirection
            } else {
                setErrorMsg('Invalid Email Or Password');
            }
        } catch (error) {
            console.error(error);
            setErrorMsg('An error occurred. Please try again later.');
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    useEffect(() => {
        const userLoginStatus = localStorage.getItem('userLoginStatus');
        if (userLoginStatus === 'true') {
            navigate('/user-dashboard');
        }
        document.title = 'User Login';
    }, [navigate]);

    return (
        <div className="login-form container">
            <div className="screen">
                <div className="screen__content">
                    <div className="login">
                        {errorMsg && <h4 className="text-danger">{errorMsg}</h4>}
                        <h2>Please Login</h2>
                        <form onSubmit={submitForm}>
                            <div className="login__field">
                                <FontAwesomeIcon icon={faUserAlt} className='icon' />
                                <input 
                                    type="text" 
                                    className="login__input" 
                                    placeholder="User Name / Email" 
                                    name="email" 
                                    value={userLoginData.email} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="login__field">
                                <FontAwesomeIcon icon={faLock} />
                                <input 
                                    type="password" 
                                    className="login__input" 
                                    placeholder="Password" 
                                    name="password" 
                                    onChange={handleChange} 
                                    value={userLoginData.password} 
                                />
                            </div>
                            <button className="button login__submit" disabled={loading}>
                                <span className="button__text">{loading ? 'Logging In...' : 'Log In Now'}</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
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

export default Login;
