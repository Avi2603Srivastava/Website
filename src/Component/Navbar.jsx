import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" to="/">
    <img src="#" alt="Bootstrap" width="30" height="24"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  mb-5 mb-lg-0 p-2">
        <li className="nav-item p-2">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item p-2">
          <Link className="nav-link" to="./aboutus">About</Link>
        </li>
        <li className="nav-item p-2">
          <Link className="nav-link" to="./eventlist">Event List</Link>
        </li>
        <li className="nav-item p-2">
          <Link className="nav-link" to="./jobpage">Job Page</Link>
        </li>
        <li className="nav-item p-2">
          <Link className="nav-link" to="./contactus">Contact Us</Link>
        </li>
        <li className="nav-item p-2">
          <Link className="btn btn-primary" to="/loginform">Login</Link>
        </li>
        
        </ul>
        {/* <form className="d-flex" role="search">
        <i className="bi bi-search text-white me-5 fs-4"></i>
      </form> */}
      
     
    </div>
  </div>
</nav>
</>
  )
}



