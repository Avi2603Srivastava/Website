import React from "react";
import Form from "../Component/Form";
import { Link } from "react-router-dom";

export default function ContactusPage() {
  return (
    <>
    <div className="container-fluid">
    <div className="row ms-2">
        <div className="col-md-6 mt-5">
       
        <div className="row">
         <h1>For Business Query</h1>
         
        </div>
        <div className="row mt-3">
          {/* <div className="col-md-6"> */}
            <div className="d-flex align-items-center">
              <i class="fas fa-map-marker-alt fa-3x me-5"></i>
              <div>
                <h4>Location</h4>
                <Link className="text-decoration-none">
                  Lorem ipsum dolor sit amet.
                </Link>
              </div>
            </div>
          {/* </div> */}
        </div>
        <div className="row mt-5">
          {/* <div className="col-md-6"> */}
            <div className="d-flex align-items-center">
              <i class="fas fa-envelope fa-3x me-5"></i>
              <div>
                <h4>Email</h4>
                <Link className="text-decoration-none">xyz@gmail.com</Link>
              </div>
            </div>
          {/* </div> */}
        </div>
        <div className="row mt-5">
          {/* <div className="col-md-6"> */}
            <div className="d-flex align-items-center">
              <i class="fa fa-phone fa-3x me-5"></i>
              <div>
                <h4>Phone</h4>
                <Link className="text-decoration-none">+91 4587185210</Link>
              </div>
            </div>
          {/* </div> */}
        </div>
          </div>
          {/* </div> */}
        <div className="col-md-6 mt-5">
            {/* <h1>this is left side</h1> */}
            <div  style={{width: "100%", height: "400px"}}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509612!2d144.9630576153183!3d-37.8136279797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xbc0c0d7a1aa4b76e!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1608741201232!5m2!1sen!2sau"
    width="700"
    height="400"
    
    allowfullscreen=""
    loading="lazy">
  </iframe>
</div>

        </div>
    </div>
      
          </div>
      <Form />
    </>
  );
}
