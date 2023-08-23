import React from 'react'
import Blogs from './Blogs/Blogs'

function Home() {




  return (
    <div className='container'>


      {/* Start home section start */}

      <section className='home mt-3 d-flex' id='home' >
        <div className='home-content'>
          <h3>Hello, Test </h3>
          <h1><span>Adil Iqbal</span></h1>
          <h3>& I Am a <span>Bloger</span></h3>
        </div>
        <div className='home-img'>
          <img src={require('./Images/Images.png')} alt='Pic' />
        </div>
      </section>

      {/*  End Home Section */}
      <div className='md-4
      '>
        <Blogs />
      </div>
      
    </div>
  )
}

export default Home
