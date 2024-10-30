import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blogs from './Blogs/Blogs';
import Auther from './Images/Images.png'



function Home() {
  const [userData, setUserData] = useState(null);
  const [isFirstLogin, setIsFirstLogin] = useState(true);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const fetchUser  = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const res = await axios.get('/user/' + userId);
      setUserData(res.data);

      // Check if the user has logged in before
      const hasLoggedInBefore = localStorage.getItem('hasLoggedInBefore');
      if (hasLoggedInBefore) {
        setIsFirstLogin(false);
      } else {
        localStorage.setItem('hasLoggedInBefore', 'true');
      }
    } catch (error) {
      console.log(error);
      setError('Hello, Test'); // Set error message
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    document.title = 'Home Page';

    // Fetch user data initially
    fetchUser ();

    // Set up polling every 5 seconds (5000 milliseconds)
    const intervalId = setInterval(() => {
      fetchUser ();
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run this effect only once

  return (
    <div className="container">
      <div className="defrate-container">
        {/* First Defrate Section */}
        <section className="defrate-section" id="defrate-section-one">
          <div className='home-content'>
            {loading ? (
              <h3>Loading...</h3>
            ) : error ? (
              <h3>{error}</h3>
            ) : userData ? (
              <h3>
                {isFirstLogin ? 'Welcome' : 'Welcome Back'}, Hello {`${userData.first_name} ${userData.last_name}`}
              </h3>
            ) : (
              <h3>Hello Test</h3>
            )}
            <h1><span>Adil Iqbal</span></h1>
            <h3>& I Am a <span>Bloger</span></h3>
          </div>
        </section>

        {/* Second Defrate Section for Author Image */}
        <section className="defrate-section" id="defrate-section-two">
          <div className='author-image'>
            <img src={Auther} alt="Author" />
          </div>
        </section>

        {/* Second Defrate Section */}
        <section className="defrate-section" id="defrate-section-two">
          <Blogs />
        </section>
      </div>
    </div>
  );
}

export default Home;