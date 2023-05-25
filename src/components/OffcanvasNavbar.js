import React from 'react'
import { Link } from 'react-router-dom';
export default function OffcanvasNavbar() {

    
  return (
    
    <div>
        <nav class="navbar navbar-expand-lg" style={{backgroundColor: '#e3f2fd'}}>
        <div class="container-fluid">
        <Link className="navbar-brand" to="/">
                    <label class="navigationbarlogo">
                        <img src="https://yt3.googleusercontent.com/_ZrgMqd-THCdqGSbIp6dWuBeQeeSehrX7eWhddI8JkBxu-WOXUcCwpmX8FamNXTYUrS9CQeHBMA=s176-c-k-c0x00ffffff-no-rj" alt="Logo"/>
                    </label>
                    <strong>Akash Ganga</strong>
        </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                    <label class="navigationbarlogo">
                        <img src="https://yt3.googleusercontent.com/_ZrgMqd-THCdqGSbIp6dWuBeQeeSehrX7eWhddI8JkBxu-WOXUcCwpmX8FamNXTYUrS9CQeHBMA=s176-c-k-c0x00ffffff-no-rj" alt="Logo"/>
                    </label>
                    <strong>Akash Ganga</strong>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
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
                        <li data-bs-dismiss="offcanvas"><Link className="dropdown-item" to="http://wa.me/7055071650" target="_blank"><i className="fab fa-whatsapp fa-1x" style={{color: "#25d366"}}> WhatsApp</i></Link></li>
                        <li data-bs-dismiss="offcanvas"><Link className="dropdown-item" to="/" target="_blank"><i className="far fa-envelope-open" style={{color: "#4285f4"}}> Drop an Email</i></Link></li>
                        {/* <li><hr className="dropdown-divider"/></li> */}
                        <li data-bs-dismiss="offcanvas"><Link className="dropdown-item" to="tel:+917055071650" target="_blank"><i className='fas fa-phone-volume fa-1x' style={{color: "#E1306C"}}> Give a call</i></Link></li>
                    </ul>
                    </li>
                    {/* <li className="nav-item">
                    <Link className="nav-link disabled">Disabled</Link>
                    </li> */}
                </ul>
                {/* <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form> */}
            </div>
            </div>
        </div>
        </nav>

    </div>
  )
}
