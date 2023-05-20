import React from 'react'

export default function Plans() {
  return (
    <>
    <div className='plans mt-3 ' >
    <h3 className='text-center'>Plans and Pricing</h3>
    <main>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm" style={{borderColor: "#0dcaf0;"}}>
            <div className="card-header py-3" style={{backgroundColor: '#0dcaf0'}}>
              <h4 className="my-0 fw-normal">Basic</h4>
            </div>
            <div className="card-body" >
              <h1 className="card-title pricing-card-title">1000 <i className="fa fa-inr"></i><small className="text-muted fw-light">/person</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>One night stay</li>
                <li>Three times meal with snacks</li>
                <li>Help center access</li>
                <li>.....</li>
                <li>.....</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn btn-outline-info">Book now</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm" style={{borderColor: "#ffc107"}}>
            <div className="card-header py-3 " style={{backgroundColor: '#ffc107'}}>
              <h4 className="my-0 fw-normal">Pro</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">1500 <i className="fa fa-inr"></i><small className="text-muted fw-light">/person</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Homestay</li>
                <li>Bonefire</li>
                <li>Trekking</li>
                <li>Help center access</li>
                <li>.....</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn btn-outline-warning">Book now</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 text-bg-primary border-primary">
              <h4 className="my-0 fw-normal">Enterprise</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">3000 <i className="fa fa-inr"></i><small className="text-muted fw-light">/person</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Camping</li>
                <li>Bonfire</li>
                <li>One adventure of your choice</li>
                <li>Guide</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-outline-primary">Book now</button>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
    </>
  )
}
