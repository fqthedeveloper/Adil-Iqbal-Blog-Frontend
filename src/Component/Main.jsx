import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

import Blogs from './Blogs/Blogs';
import Content from './Blogs/Content';
// import Error from './404';
import Logout from './Users Component/Logout';

// User Panels url
import UserDashbord from './Users Component/User-Dashboard';
import ProfileSetting from './Users Component/ProfileSetting';
import ChangePassword from './Users Component/ChangePassword';
import Login from './Users Component/Login';
import Register from './Users Component/Register';

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
  