import React from 'react'
import SlickSlider from '../components/SlickSlider'
import AutoPlay from '../components/AutoPlay'
import Services2 from '../components/Services2'
import Services3 from '../components/Services3'
export default function HomePage() {
  return (
    <>
    <div className='logoimg'>
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
                <h2 className="fw-light" style={{fontFamily: 'Yatra One, cursive'}}>

                  Typewriter Effect
                </h2>
                <h2>Akash Ganga Welcomes You</h2>
                <span>Hello </span><span>Aviral</span>
                <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                <p>
                {/* <a href="/" className="btn btn-primary my-2">Main call to action</a> */}
                {/* <a href="/" className="btn btn-secondary my-2">Secondary action</a> */}
                </p>
            </div>
            </div>
        </section>
    </div>
    <hr/>
      <SlickSlider />
    <hr/>
    <AutoPlay/>
    <hr/>
    <Services2/>
    <hr />
    <Services3 />
    </>
  )
}
