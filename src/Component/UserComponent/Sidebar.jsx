import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';


function Sidebar() {

    const [UserData, setUserData] = useState([]);

    useEffect(() => {

    try {
      axios.get('/user/')
        .then((res) => {
            setUserData(res.data)

        });

    } catch (error) {
      console.log(error);
    }
  }, []);


    return (

        <main className='asidebar'>
            <div className="asidebar d-flex flex-column flex-shrink-0 p-2 text-white bg-dark">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <img src={require("../Images/download.jpeg")} alt="Profile" className="bi me-2" width="40" height="32" />
                    <span className="fs-4 text-white"><h3 id={`/user/${UserData.id}`}>{UserData.first_name}</h3></span>
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/user-dashboard" className="nav-link text-white">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/#" className="nav-link text-white">
                            Orders
                        </Link>
                    </li>
                    <li>
                        <Link to="/#" className="nav-link text-white">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/#" className="nav-link text-white">
                            Customers
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <Link to="/#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={require("../Images/download.jpeg")} alt="ProfilePic" width="32" height="32" className="rounded-circle me-2" />
                        <strong>Profile</strong>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><Link to="/change-password" className="dropdown-item">Change Password</Link></li>
                        <li><Link to="/profile-setting" className="dropdown-item">Profile Settings</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link to="/logout" className="dropdown-item">Sign out</Link></li>
                    </ul>
                </div>

            </div>
        </main>
    )
}

export default Sidebar;