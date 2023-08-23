import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';


function Blogs() {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {

    document.title = 'Home Page';

    try {
      axios.get('/blogs/')
        .then((res) => {
          setBlogsData(res.data)

        });

    } catch (error) {
      console.log(error);
    }
  }, []);

  return (

    <main className='blogs-container mt-4 md-5 d-md-flex'>
      <div className="container" >

        {blogsData.map((blogs, index) =>
          <div className="card" key={index}>

            <div className="card__header" width='100px' height='100px'  >
              <img src={blogs.futher_image} alt={blogs.title} className="card__image" width='100px' height='100px' />
            </div>
            <div className="card__body">
              <span className="tag tag-blue"><h3>{blogs.category.title}</h3></span>
              <h2 className='title'><Link to={`/content/${blogs.id}`}>{blogs.title}</Link></h2>
              <h5>{blogs.content}</h5>
            </div>
            <div className="card__footer">
              <div className="user">
                <img src={blogs.author.profile_pic} width='60px' alt="user__image" className="user__image" />
                <div className="user__info">
                  <h4 className='title'>{blogs.author.full_name}</h4>
                  <h5><Moment format="YYYY/MMM/DD">{blogs.updated_on}</Moment></h5>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>

  )
}

export default Blogs
