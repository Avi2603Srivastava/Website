import React from 'react'

export default function Services() {
  return (
  <>
    <div className="container mt-5">
    <h1 className='text-center text-uppercase'>Our Services</h1>
        <div className="row">
            <div className="col-md-6">
                <img src="/img/stone.avif" className='me-3 my-3 img-fluid' height={800} width={768}  alt=""/>
            </div>
            <div className="col-md-6">
                <img src="/img/snow.avif" className=' my-3 img-fluid'  height={600} width={768} alt=""/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <img src="/img/flower.avif" className='me-3 img-fluid' height={683} width={768} alt=""/>
            </div>
            <div className="col-md-6">
                <img src="/img/desert.avif" className='img-fluid' height={683} width={768} alt=""/>
            </div>
        </div>
    </div>
  </>
  )
}
