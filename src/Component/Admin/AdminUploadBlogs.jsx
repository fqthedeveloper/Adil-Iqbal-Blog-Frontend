//import {Link} from 'react-router-dom';
import Sidebar from './AdminSidebar';
import {useState,useEffect} from 'react';
import axios from 'axios'

const baseUrl='http://127.0.0.1:8000/api';

function AdminUploadBlogs(){
    const [cats,setCats]= useState([]);
    // const [admin,adminData]= useState([]);
    const [blogsData,setBlogsData]=useState({
        category: '',
        title: '',
        futher_image:'',
        content:'',
    });


    useEffect(()=> {
        document.title='Add Blogs';
        try{
            axios.get(baseUrl+'/category/')
            .then((res)=>{
                   setCats(res.data)
                
            });

        }catch(error){
            console.log(error);
        }
    },[]);


    const handleChange=(event)=>{
      setBlogsData({
            ...blogsData,
            [event.target.name]: event.target.value
        });
    }

    const handleFileChange=(event)=>{
      setBlogsData({
            ...blogsData,
            [event.target.name]: event.target.files[0]
        });
    }

    const formSubmit=()=>{
        const _formData=new FormData();
        _formData.append('author',1);
        _formData.append('category',blogsData.category);
        _formData.append('title', blogsData.title);
        _formData.append('futher_image', blogsData.f_img,blogsData.f_img.name);
        _formData.append('content', blogsData.content);

        try{
            axios.post(baseUrl+'/blogs/',_formData,{
                header: {
                    'content-type': 'multipart/form-data'
                }
                })
                .then((res)=>{
//                    console.log(res.data)
                    window.location.href='/admin-upload-blogs';

                });
            }catch(error){
                console.log(error);
            }
    };

    return(
        <div className="">
            <div className="row">
               <aside className="col-md-3">
                   <Sidebar />
               </aside>
               <section className="AdminUploadBlogs col-md-9">
                   <div className='card'>
                       <h3 className='card-header'>Add Blogs</h3>
                       <div className='card-body'>
                       <div className="mb-3 row">
                        
                       <label htmlFor="text" className="col-sm-2 col-form-label">Category</label>
                        <div className="col-sm-10">
                        <select name="category" onChange={handleChange} className="up-form form-control">
                            {cats.map((cats,index)=>{return <option key={index} value={cats.id}> {cats.title} </option>
                        })}
                        </select>
                        </div>
                       
                        <br/> 

                        {/* <label htmlFor="text" className="col-sm-2 col-form-label">Auther</label>
                        <div className="col-sm-10">
                        <select name="author" onChange={handleChange} className="up-form form-control">

                          {admin.map((author,index)=>{return <option key={index} value={author.id}> {author.full_name} </option>
                        })}                       
                        </select>
                        </div> */}

                       <label htmlFor="text" className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                        <input type="text" className="up-form form-control" name="title" id="title" placeholder="Enter Blogs Title" onChange={handleChange}/>
                        </div><br/>

                    <label htmlFor="description" className="col-sm-2 col-form-label">Content</label>
                    <div className="col-sm-10">
                    <input type="area-text" className="up-form form-control" name="content" id="content" placeholder="Enter Blogs Content" onChange={handleChange}/>
                    </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Featured image</label>
                        <div className="col-sm-10">
                        <input type="file" onChange={handleFileChange} className="up-form form-control" id="f_img" name="f_img"  />
                        </div>
                    </div>
                   
                    <hr />
                       <button type='button' className='up-button btn btn-primary' onClick={formSubmit} >Submit</button>
               
                       </div>
                   </div>
               </section>
            </div>
        </div>
    )
}


export default AdminUploadBlogs;