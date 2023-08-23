import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  
  const userLoginStatus = localStorage.getItem('userLoginStatus')
  // const adminLoginStatus = localStorage.getItem('adminLoginStatus')
  return (
    
    <div className='header'>
      <header className="header header-fixed">

        <div className="header-limiter">

          <h1><Link to="/#">Adil Iqbal <span>BLOG</span></Link></h1>

          <nav>
            <Link to="/">Home</Link>
            &nbsp; &nbsp;
            <Link to="/blogs">Blog</Link>
            &nbsp; &nbsp;
            <Link to="/#">About</Link>
            &nbsp; &nbsp;
            {userLoginStatus !== 'true' &&
              <>
                <Link to="/login" type="button" id='login' className="btn btn-outline-secondary btn btn-outline-info btn-md mr-3">Login</Link>
                &nbsp; &nbsp;
                <Link to="/register" type="button" id='register' className="btn btn-outline-secondary btn btn-outline-info btn-md ml-3" >Register</Link>
              </>
            } 
             &nbsp; &nbsp;

            <Link to="/user-dashboard">Dashboard</Link>
            &nbsp; &nbsp;
            <Link to="/logout">Logout</Link>
          
          </nav>
        </div>

      </header>

      <div className="header-fixed-placeholder"></div>

    </div>
  )
}

export default Header;
