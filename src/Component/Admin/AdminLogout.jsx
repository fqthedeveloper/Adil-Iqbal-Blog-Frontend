import React from "react";


function Logout(){
    localStorage.removeItem('adminLoginStatus')
    window.location.href='/admin-login';

return(
    <div></div>
);
}

export default Logout;