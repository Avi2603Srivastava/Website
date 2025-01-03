import React from 'react'
import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <>
    <div className="container mt-5">
    <ul class="nav justify-content-center">
    <li class="nav-item">
    <Link class="nav-link" aria-current="page" to="/">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/aboutus">About</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/jobpage">JobPage</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/eventlist">EventList</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/contactus">Contact Us</Link>
  </li>
 
</ul>
</div>
    </>
  )
}
