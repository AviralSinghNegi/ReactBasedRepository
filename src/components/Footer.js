import React from 'react'
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div>
        <div >
            <footer className="py-3 mt-4" style={{backgroundColor: '#e3f2fd'}}>
                <ul className="nav justify-content-center  ">
                <li className="nav-item"><Link  to="/" className="nav-link px-2 text-muted">Home</Link></li>
                <li className="nav-item"><Link  to="/" className="nav-link px-2 text-muted">Features</Link></li>
                <li className="nav-item"><Link  to="/" className="nav-link px-2 text-muted">Pricing</Link></li>
                <li className="nav-item"><Link  to="/" className="nav-link px-2 text-muted">FAQs</Link></li>
                <li className="nav-item"><Link  to="/" className="nav-link px-2 text-muted">About</Link></li>
                </ul>

                
                <ul className="nav justify-content-center  ">
                <li className="nav-item"><Link  to="/" target="_blank" className="nav-link px-2 text-muted"><i className="fab fa-twitter fa-2x" style={{color: "#55acee"}}></i></Link></li>
                <li className="nav-item"><Link  to="https://www.linkedin.com/in/aviral-singh-negi/" target="_blank" className="nav-link px-2 text-muted"><i className="fab fa-linkedin fa-2x" style={{color: "#0077b5"}}></i></Link></li>
                <li className="nav-item"><Link  to="https://instagram.com/aviralsinghnegi?igshid=ZDdkNTZiNTM=" target="_blank" className="nav-link px-2 text-muted"><i className="fab fa-instagram fa-2x" style={{color: "#E1306C"}}></i></Link></li>
                <li className="nav-item"><Link  to="https://m.facebook.com/107171911638627/" target="_blank" className="nav-link px-2 text-muted"><i className="fab fa-facebook-f fa-2x" style={{color: "#3b5998"}}></i></Link></li>
                <li className="nav-item"><Link  to="http://wa.me/7055071650" target="_blank" className="nav-link px-2 text-muted"><i className="fab fa-whatsapp fa-2x" style={{color: "#25d366"}}></i></Link></li>
                <li className="nav-item"><Link  to="https://www.youtube.com/@AviralSinghNegi" target="_blank" className="nav-link px-2 text-muted"><i className="fab fa-youtube fa-2x" style={{color: "#ed302f"}}></i></Link></li>
                
                </ul>
                <p className="text-center text-muted">&copy; 2023 Akash Ganga | All Rights Reserved</p>
            </footer>
        </div>
    </div>
  )
}
