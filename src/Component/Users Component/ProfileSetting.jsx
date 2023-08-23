//import {Link} from 'react-router-dom';
import Sidebar, {} from './Sidebar'


function ProfileSetting(){
    return(
        <div className="d-flex">
        <div className="row">
           <aside className="col-md-3">
               <Sidebar />
           </aside>
           <section className="profile-setting col-md-9 mt-4">
               <div className='card'>
                   <h3 className='card-header'>Profile Setting</h3>
                   <div className='card-body'>
                   <div className="mb-3 row">

                   <label htmlFor="text" className="col-md-2 col-form-label">Full Name</label>
                    <div className="col-md-10">
                    <input type="text" className="p-form form-control" id="staticText" />
                    </div><br/><br/>

                <label htmlFor="staticEmail" className="col-md-2 col-form-label">Email</label>
                <div className="col-md-10">
                <input type="email" className="p-form form-control" id="staticEmail" />
                </div>
                </div>
                <div className="mb-5 row">
                    <label htmlFor="inputPassword" className="col-md-2 col-form-label">Profile Photo</label>
                    <div className="col-md-10">
                    <input type="file" className="p-form form-control" id="inputPassword" />
                    </div><br/><br/>

                    <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-md-2 col-form-label">Password</label>
                    <div className="col-md-10">
                    <input type="password" className="p-form form-control" id="inputPassword" />
                    </div>
                  </div><br/><br/>
                  <label htmlFor="staticEmail" className="col-md-2 col-form-label">Interest</label>
                <div className="col-md-10">
                <input type="text" readOnly className="p-form form-control" id="staticEmail" />
                </div>

                </div>
                <hr />
                   <button className='p-button btn btn-primary'> Update </button>
           
                   </div>
               </div>
           </section>
        </div>
    </div>
    )
}


export default ProfileSetting;