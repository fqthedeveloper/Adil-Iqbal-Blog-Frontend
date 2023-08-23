//import {Link} from 'react-router-dom';
import Sidebar, {} from './Sidebar'


function ChangePassword(){
    return(
        <div className="d-flex">
            <div className="row">
               <aside className="col-md-3">
                   <Sidebar />
               </aside>
               <section className="change-password col-md-9 mt-4">
                   <div className='card'>
                       <h2 className='card-header'>Change Password</h2>
                       <div className='card-body'>
                       <div className="mb-3 row">
                   </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">New Password</label>
                        <div className="col-sm-10">
                        <input type="password" className="cp-form form-control" id="inputPassword" />
                        </div>
                    </div>
                    <hr />
                       <button className='cp-button btn btn-primary' >Update</button>
               
                       </div>
                   </div>
               </section>
            </div>
        </div>
    )
}


export default ChangePassword;