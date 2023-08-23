import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

import Blogs from './Blogs/Blogs';
import Content from './Blogs/Content';
// import Error from './404';
import Logout from './UserComponent/Logout';

// User Panels url
import UserDashbord from './UserComponent/User-Dashboard';
import ProfileSetting from './UserComponent/ProfileSetting';
import ChangePassword from './UserComponent/ChangePassword';
import Login from './UserComponent/Login';
import Register from './UserComponent/Register';

// Admin Panakes Url
// import AdminLogin from './Admin/AdminLogin';
// import AdminDashbord from './Admin/AdminDashboard';
// import AdminUploadBlogs from './Admin/AdminUploadBlogs';
// import AdminUploadBlog from './Admin/AdminUploadBlogs';
// import AdminLogout from './Admin/AdminLogout';


function Main() {
    return (
      <div className="App">
        <Header />
        <Switch>

          {/* admin Panels  */}

          {/* <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashbord />} />
          <Route path="/admin-upload-blogs" element={<AdminUploadBlogs />} />
          <Route path="/admin-upload-blog" element={<AdminUploadBlog />} />
          <Route path="/admin-logout" element={<AdminLogout />} /> */}


          <Route path="/" element={<Home />} />
          {/* <Route path="/*" element={<Error />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/content/:blogs_id" element={<Content />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/user-dashboard" element={<UserDashbord />} />
          <Route path="/profile-setting" element={<ProfileSetting />} />
          <Route path="/change-password" element={<ChangePassword />} />

        </Switch>
        <Footer />
      </div>
  
    );
  }
  
  export default Main;
  