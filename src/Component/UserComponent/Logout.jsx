import React from "react";
import { useNavigate } from "react-router-dom";



function Logout(){
    const navigate = useNavigate();

    localStorage.removeItem('userLoginStatus')
    navigate('/login');

return(
    <div></div>
);
}

export default Logout;