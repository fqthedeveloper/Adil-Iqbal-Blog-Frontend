import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import Moment from 'react-moment';

function Blog() {
  const [blogsData, setBlogsData] = useState([]);
  const [ContentData, setContentData] = useState([]);
  const [authorData, setAuthorData] = useState([]);

  let { blogs_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/blogs/' + blogs_id);
        setBlogsData(res.data);
        setContentData(res.data.blogs_content);
        setAuthorData(res.data.author);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [blogs_id]);

  useEffect(() => {
    document.title = `${blogsData.title}`;
  }, [blogsData.title]);

  return (
    <div className="content-page">
      <div className="row">
        <div>
          <h1>{blogsData.title}</h1>
          <div>
            <p className="lead">
              <i className="fa fa-user"></i> by <a href="#/">{authorData.full_name}</a>
            </p>
          </div>
          <hr />
          <p>
            <i className="fa fa-calendar"></i> Posted on: <Moment format="DD-MMM-YYYY h:mm A ">{blogsData.updated_on}</Moment>
          </p>
          <br />
          <p>
            <i className="fa fa-tags"></i> Tags: <a href="#/"><span className="badge badge-info"></span></a>
          </p>

          {ContentData.map((content, index) => (
            <div key={index}>
              <br />
              <h2><center><strong>{content.title}</strong></center></h2>
              <br /><br />

              <div className="content-vid">
                <ReactPlayer url={content.video} controls={true} muted={true} playing={false} width='100%' height='auto' />
              </div>

              <br />
              <p>{content.content}</p>
              <br /> 
              <h4>I like the post? Like this!</h4>
            </div>
          ))}
          <div className="g-plusone" data-annotation="inline" data-width="300" data-href=""></div>
        </div>
      </div>
    </div>
  );
}

export default Blog;