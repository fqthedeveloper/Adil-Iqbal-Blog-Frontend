import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const userLoginStatus = localStorage.getItem('userLoginStatus');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header'>
      <header className="header header-fixed">
        <div className="header-limiter">
          <h1><Link to="/#">Adil Iqbal <span>BLOG</span></Link></h1>

          {/* Toggle button for mobile */}
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>

          {/* Navigation */}
          <nav className={isMenuOpen ? 'open' : ''}>
            <Link to="/">Home</Link>
            &nbsp;&nbsp;
            <Link to="/blogs">Blog</Link>
            &nbsp;&nbsp;
            <Link to="/#">About</Link>
            &nbsp;&nbsp;
            {userLoginStatus !== 'true' ? (
              <>
                <Link to="/login" className="btn btn-outline-secondary btn-md">Login</Link>
                &nbsp;&nbsp;
                <Link to="/register" className="btn btn-outline-secondary btn-md">Register</Link>
              </>
            ) : (
              <>
                <Link to="/user-dashboard">Dashboard</Link>
                &nbsp;&nbsp;
                <Link to="/logout">Logout</Link>
              </>
            )}
          </nav>
        </div>
      </header>
      <div className="header-fixed-placeholder"></div>
    </div>
  );
}

export default Header;