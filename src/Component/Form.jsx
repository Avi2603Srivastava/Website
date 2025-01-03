import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
export default function Form() {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-6">
            <h1>You may stay in touch with us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              maxime.
            </p>
            <div className="icons p-2">
              <Link
                to="https://facebook.com"
                target="_blank"
                style={{ color: "#4267B2" }}
              >
                <FontAwesomeIcon icon={faFacebook} className="fs-2 p-2" />
              </Link>
              <Link
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#25D366" }}
              >
                <FontAwesomeIcon icon={faWhatsapp} className="fs-2 p-2" />
              </Link>
              <Link
                href="https://t.me/username"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0088cc" }}
              >
                <FontAwesomeIcon icon={faTelegram} className="fs-2 p-2" />
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <div className="form-floating form-label mb-3">
                  <input
                    type="name"
                    class="form-control"
                    id="name"
                    placeholder="Full Name"
                  />
                  <label for="floatingInput"> Full Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="Email"
                    placeholder="Email"
                  />
                  <label for="floatingPassword">Email</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="Subject"
                    placeholder="Subject"
                  />
                  <label for="floatingPassword">Subject</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form-floating mt-4">
                  <textarea
                    className="form-control"
                    placeholder="Enter your message here..."
                    id="floatingTextarea"
                    style={{height:"200px"}}
                  ></textarea>
                  <label htmlFor="floatingTextarea">Message</label>
                </div>
              </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <div className="form-floating mt-3 ">
                    <button className="btn btn-outline-primary">Send Here</button>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
