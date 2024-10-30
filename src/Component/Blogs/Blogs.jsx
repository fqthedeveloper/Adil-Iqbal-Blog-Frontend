import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

function Blogs() {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    document.title = 'Home Page';

    const fetchBlogs = async () => {
      try {
        const res = await axios.get('/blogs/');
        setBlogsData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <main className='blogs-container mt-4'>
      <div className="container">
        <div className="blogs-grid">
          {blogsData.map((blogs, index) => (
            <div className="card" key={index}>
              <div className="card__header">
                <img src={blogs.futher_image} alt={blogs.title} className="card__image" />
              </div>
              <div className="card__body">
                <span className="tag tag-blue"><h6>{blogs.category.title}</h6></span>
                <h4 className='title'><Link to={`/content/${blogs.id}`}>{blogs.title}</Link></h4>
                <h5>{blogs.content}</h5>
              </div>
              <div className="card__footer">
                <div className="user">
                  <img src={blogs.author.profile_pic} width='60px' alt="user__image" className="user__image" />
                  <div className="user__info">
                    <h5 className='title'>{blogs.author.full_name}</h5>
                    <h6><Moment fromNow ago>{blogs.updated_on}</Moment></h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Blogs;