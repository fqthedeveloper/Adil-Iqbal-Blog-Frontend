import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player'
import Moment from 'react-moment';



function Blog() {

  const [blogsData, setBlogsData] = useState([]);
  const [ContentData, setContentData] = useState([]);
  const [authorData, setAuthorData] = useState([]);

  // const [userdata, setUserdata] = useState([]);
  let { blogs_id } = useParams();

  useEffect(() => {

    try {
      axios.get('/blogs/' + blogs_id)
        .then((res) => {
          setBlogsData(res.data)
          setContentData(res.data.blogs_content)
          setAuthorData(res.data.author)

        });

    } catch (error) {
      console.log(error);
    }
  }, [blogs_id]);

  useEffect(() => {
    document.title = `${blogsData.title}`;
  })


  return (


    <div className="content-page container mt-5">

      <div className="row">
        <div>

          <div>
            <h1>{blogsData.title}</h1>
            <br />
            <div>
              <p className="lead"><i className="fa fa-user"></i> by <a href="#/">{authorData.full_name}</a>
              </p>
            </div>

            <hr />
            <p><i className="fa fa-calendar"></i> Posted on: <Moment format="DD / MMM / YYYY">{blogsData.updated_on}</Moment></p>
            <br />
            <p><i className="fa fa-tags"></i> Tags: <a href="#/"><span className="badge badge-info"></span></a></p>
          </div>

          {ContentData.map((content, index) =>
            <div key={index}>
              <br />
              <center><strong>{content.title}</strong> </center>

              <br /><br /><br />

              <div className="content-vid">
                <ReactPlayer url={content.video} controls={true} muted={true} playing={true} width='150%' />
              </div>

              <br /><br /><br /><br />
              <p>{content.content}</p>


              <p><h4>I like the post? Like this!</h4></p>

            </div>
          )}
          <div className="g-plusone" data-annotation="inline" data-width="300" data-href=""></div>
        </div>
      </div>
    </div>
  )
}

export default Blog;
