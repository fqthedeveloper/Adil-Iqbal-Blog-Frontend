import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import Moment from 'react-moment';
import { AuthContext } from '../AuthContext'; // Adjust the path to your AuthContext

function Content() {
    const [blogsData, setBlogsData] = useState([]);
    const [ContentData, setContentData] = useState([]);
    const [authorData, setAuthorData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [likesCount, setLikesCount] = useState(0);
    const [liked, setLiked] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState([]);

    const { userId, isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const { blogs_id } = useParams();

    useEffect(() => {
        console.log('Blogs Data:', blogsData);
    }, [blogsData]);

    useEffect(() => {
        console.log('Content Data:', ContentData);
    }, [ContentData]);

    useEffect(() => {
        console.log('Likes Count:', likesCount);
    }, [likesCount]);

    useEffect(() => {
        console.log('Liked:', liked);
    }, [liked]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/blogs/${blogs_id}`);
                setBlogsData(res.data);
                setContentData(res.data.blogs_content);
                setAuthorData(res.data.author);
                setLikesCount(res.data.likes_count); // Assuming likes_count is provided in the response
            } catch (error) {
                setError('Error fetching data. Please try again later.');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [blogs_id]);

    useEffect(() => {
        document.title = `${blogsData.title}`;
    }, [blogsData.title]);

    const handleLike = async (contentId) => {
        console.log('isLoggedIn:', isLoggedIn); // Check if the user is logged in
        if (!isLoggedIn) {
            navigate('/login'); // Redirect to login page if not logged in
            return;
        }

        const likeData = { content: contentId };
        try {
            const response = await axios.post('/likes/', likeData);
            if (response.status === 201) {
                setLikesCount(prevCount => prevCount + 1); // Update likes count
                setLiked(true);
            }
        } catch (error) {
            let errorMessage = 'Error liking the content';
            if (error.response && error.response.data && error.response.data.detail) {
                errorMessage = error.response.data.detail;
            }
            alert(errorMessage);
            console.error(errorMessage, error);
        }
    };

    const fetchComments = async (contentId) => {
        try {
            const res = await axios.get(`/comments/${contentId}/`);
            setComments(res.data);
        } catch (error) {
            console.error('Error fetching comments', error);
        }
    };

    const handleCommentSubmit = async (e, contentId) => {
        e.preventDefault();
        if (!isLoggedIn) {
            navigate('/login'); // Redirect to login page if not logged in
            return;
        }

        try {
            await axios.post(`/comments/${contentId}/`, { user: userId, text: commentText });
            setCommentText('');
            fetchComments(contentId); // Refresh comments
        } catch (error) {
            console.error('Error submitting comment', error);
        }
    };

    useEffect(() => {
        if (ContentData.length > 0) {
            fetchComments(ContentData[0].id); // Fetch comments for the first content item
        }
    }, [ContentData]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="content-page">
            <div className="row">
                <div>
                    {ContentData.map((content, index) => (
                        <div key={index} className="content-item">
                            <h1 className="content-title">{content.title}</h1>
                            {content.video ? (
                                <div className="content-vid">
                                    <ReactPlayer url={content.video} controls={true} muted={true} width='100%' height='100%' />
                                </div>
                            ) : (
                                <div className="content-img">
                                    <img src={content.photo} alt={content.title} className="img-responsive" />
                                </div>
                            )}
                            <br />
                            <div className="content-meta">
                                <p className="lead">
                                    <i className="fa fa-user"></i> by <a href="#/">{authorData.full_name}</a>&nbsp;&nbsp;
                                    <i className="fa fa-calendar"></i> Posted on: <Moment format="DD-MMM-YYYY h:mm A ">{blogsData.updated_on }</Moment>
                                </p>
                                <p>
                                    <i className="fa fa-tags"></i> Tags: 
                                    <Link to={blogsData.category.id} className="badge text-lg-start badge-pill text-dark bg-warning mr-4" >{blogsData.category.title}</Link>
                                </p>
                            </div>
                            <p>{content.content}</p>
 <br />
                            
                            <button
                                className={`btn ${liked ? 'btn-danger' : 'btn-primary'}`}
                                onClick={() => handleLike(content.id)}
                            >
                                {liked ? <i className="fa fa-heart" style={{ color: 'red' }} /> : <i className="fa fa-heart-o" />}
                                Like ({likesCount})
                            </button>

                            <div className="comments-section">
                                <h4>Comments:</h4>
                                {comments.map(comment => (
                                    <div key={comment.id} className="comment">
                                        <h5>{comment.text}</h5>
                                        <h5><small>By: {comment.user.first_name}</small></h5>
                                    </div>
                                ))}
                                <form onSubmit={(e) => handleCommentSubmit(e, content.id)}>
                                    <textarea value={commentText} onChange={(e) => setCommentText(e.target.value)} className="form-control" />
                                    <button type="submit" className="btn btn-primary">Submit Comment</button>
                                </form>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Content;