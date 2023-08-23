import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="footer mt-4">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" href="/#">
          <ion-icon style={{color:'#4267B2'}} name="logo-facebook"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="/#">
          <ion-icon style={{color:'#1DA1F2'}} name="logo-twitter" ></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="/#">
          <ion-icon style={{color:'#0077b5 '}} name="logo-linkedin"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="/#">
          <ion-icon style={{color:'#8a3ab9'}} name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
        <ul className="menu">
          <li className="menu__item"><a className="menu__link" href="/">Home</a></li>
          <li className="menu__item"><a className="menu__link" href="/#">About</a></li>
          <li className="menu__item"><a className="menu__link" href="/#">Services</a></li>
          <li className="menu__item"><a className="menu__link" href="/#">Contact</a></li>

        </ul>
        <p className='d-flex justify-content' >&copy;2023 All Rights Reserved Adil Iqbal | Developed By Faizan Qureshi</p>
      </footer>
    </div>
  )
}

export default Footer
