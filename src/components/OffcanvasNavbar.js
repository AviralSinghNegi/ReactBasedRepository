import React from 'react'
import { Link } from 'react-router-dom';

import { IoMdMailUnread } from "react-icons/io";
import { AiOutlineWhatsApp } from "react-icons/ai"; 
import { FaPhoneVolume } from "react-icons/fa";
export default function OffcanvasNavbar() {

    
  return (
    
    <div>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#e3f2fd'}}>
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">
                    <label className="navigationbarlogo">
                        <img src="https://yt3.googleusercontent.com/_ZrgMqd-THCdqGSbIp6dWuBeQeeSehrX7eWhddI8JkBxu-WOXUcCwpmX8FamNXTYUrS9CQeHBMA=s176-c-k-c0x00ffffff-no-rj" alt="Logo"/>
                    </label>
                    <strong>Akash Ganga</strong>
        </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    <label className="navigationbarlogo">
                        <img src="https://yt3.googleusercontent.com/_ZrgMqd-THCdqGSbIp6dWuBeQeeSehrX7eWhddI8JkBxu-WOXUcCwpmX8FamNXTYUrS9CQeHBMA=s176-c-k-c0x00ffffff-no-rj" alt="Logo"/>
                    </label>
                    <strong>Akash Ganga</strong>
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
            <ul className=" d-flex navbar-nav mb-2 mb-lg-0 ms-auto " >
                    <li className="nav-item " data-bs-dismiss="offcanvas">
                    <Link className="nav-link active" aria-current="page" to="/"><span className="fa fa-home "></span> Home</Link>
                    </li>
                    <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link className="nav-link active" aria-current="page" to="/gallery"><span className="fa fa-camera-retro "></span> Gallery</Link>
                    </li>
                    <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link className="nav-link active" aria-current="page" to="/services"><span className="fas fa-handshake "></span> Services</Link>
                    </li>
                    <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link className="nav-link active" aria-current="page" to="/plans"><span className="fa fa-list"></span> Plans</Link>
                    </li>
                    <li className="nav-item" data-bs-dismiss="offcanvas">
                    <Link className="nav-link active" aria-current="page" to="/about"><span className="fa fa-users "></span> About</Link>
                    </li>
                    {/* <li className="nav-item">
                    <Link className="nav-link" to="/">Link</Link>
                    </li> */}
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/contact" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="fas fa-phone-volume"></span> Contact
                    </Link>
                    <ul className="dropdown-menu">
                        <li data-bs-dismiss="offcanvas" ><Link className="dropdown-item" to="http://wa.me/7055071650" target="_blank" ><AiOutlineWhatsApp/> WhatsApp</Link></li>
                        <li data-bs-dismiss="offcanvas"><Link className="dropdown-item" to="/" target="_blank"><IoMdMailUnread/> Drop an Email</Link></li>
                        {/* <li><hr className="dropdown-divider"/></li> */}
                        <li data-bs-dismiss="offcanvas"><Link className="dropdown-item" to="tel:+917055071650" target="_blank"><FaPhoneVolume/> Give a call</Link></li>
                    </ul>
                    </li>
                    {/* <li className="nav-item">
                    <Link className="nav-link disabled">Disabled</Link>
                    </li> */}
                </ul>
                {/* <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
            </div>
            </div>
        </div>
        </nav>

    </div>
  )
}
