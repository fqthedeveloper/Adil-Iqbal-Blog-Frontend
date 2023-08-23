//import {Link} from 'react-router-dom';
import Sidebar from './Sidebar'
import React, { useEffect} from 'react';



function UserDashbord(){

    useEffect(() => {
          document.title='User Dashboard';
        });


    return(
        <div className="d-flex">
            <div className="row">
               <aside className="col-md-3 ">
                   <Sidebar />
               </aside>
               <section className="user-dashbord col-md-9 mt-4">
                <h1>
                    User Dashboard
                </h1>
               
               </section>
            </div>
        </div>
    )
}


export default UserDashbord;