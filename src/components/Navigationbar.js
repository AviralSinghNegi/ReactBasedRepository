import React from 'react'

export default function Navigationbar() {
    
  return (
    <div >
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#e3f2fd'}}>
            <div className="container-fluid ">
                <a className="navbar-brand" href="/"><strong>Akash Ganga</strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse "  id="navbarSupportedContent"  >
                <ul className=" d-flex navbar-nav mb-2 mb-lg-0 ms-auto " >
                    <li className="nav-item ">
                    <a className="nav-link active" aria-current="page" href="/"><span class="fa fa-home "></span> Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/"><span class="fa fa-camera-retro "></span> Gallery</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/"><span class="fas fa-handshake "></span> Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/"><span class="fa fa-list"></span> Plans</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/"><span class="fa fa-users "></span> About</a>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link" href="/">Link</a>
                    </li> */}
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="fas fa-phone-volume"></span> Contact
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/"><i class="fab fa-whatsapp fa-1x" style={{color: "#25d366"}}> WhatsApp</i></a></li>
                        <li><a className="dropdown-item" href="/"><i class="far fa-envelope-open" style={{color: "#4285f4"}}> Drop an Email</i></a></li>
                        {/* <li><hr className="dropdown-divider"/></li> */}
                        <li><a className="dropdown-item" href="/"><i class='fas fa-phone-volume fa-1x' style={{color: "#E1306C"}}> Give a call</i></a></li>
                    </ul>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                    </li> */}
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
            </div>
        </nav>
    </div>
  )
}
