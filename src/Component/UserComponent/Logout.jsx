import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('userLoginStatus');
        navigate('/login');
        window.location.reload(); 
    }, [navigate]);

    return (
        <div></div>
    );
}

export default Logout;
