import React from 'react'
import Aboutus from "../Component/AboutUs"
import ChooseUs from '../Component/ChooseUs'
import Form from '../Component/Form'
import Craousel from '../Component/Craousel'
import SmallCraousel from '../Component/SmallCraousel'


export default function Home() {
  return (
    <>
    <Craousel />
    <div className="home-page container-fluid">
      {/* Welcome Section */}
      <div className="row align-items-center text-center my-5">
        <div className="col">
          <h1 className="welcome-title">Welcome to EventHire</h1>
          <p className="platform-overview">
            Connect with top companies and find your perfect event job with ease.
          </p>
          <div className="action-buttons mt-4">
            {/* <a href="/signup" className="btn btn-primary mx-2">Sign Up</a>
            <a href="/login" className="btn btn-secondary mx-2">Log In</a> */}
            <a href="/jobs" className="btn btn-success mx-2">View Jobs</a>
          </div>
        </div>
      </div>

      {/* Quick Search Bar */}
      <div className="row justify-content-center my-4">
        <div className="col-md-6">
          <form className="form-control btn-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search jobs or events..."
              aria-label="Search"   
              />
            <button type="submit" className="btn btn-outline-primary">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
    <Aboutus />
    <ChooseUs />
    <SmallCraousel/>
    <Form />
 </>
 )
}
  

