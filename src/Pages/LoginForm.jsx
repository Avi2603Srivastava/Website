import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function LoginForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row d-flex align-items-center justify-content-center">
          {/* <div className="col-md-6 d-flex flex-column align-items-center left">
            <img
              src="./logo img.png"
              // className="d-flex m-auto"
              alt="image not displayed"
              height={150}
              width={150}
              className="mt-3 logo"
            />
            <div className="search-bar d-flex  align-items-center mb-3">
              <input type="text" placeholder="Coming Soon..." className="search"></input>
              <i className="fas fa-microphone ms-2"></i>
              <i className="fas fa-search ms-2"></i>
            </div>
            <video
              width="500"
              controls
              className="d-flex m-auto mt-3 videoClip"
              style={{ borderRadius: "8%" , height:"auto"}  }
            >
              <source
                src="https://res.cloudinary.com/dfv1qnzoz/video/upload/v1719039250/gh211amrhepwgubdirem.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div> */}
          <div className="col-md-6 mb-3 right">
            <Form className="form-control form-label  m-auto w-50">
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email address or phone number"
                  className="w-40 p-3"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="w-40 p-3 mt-3"
                  required
                />
              </Form.Group>
              <Button variant="primary" className="w-100 mt-3" block>
                Log In
              </Button>
              <Link
                to="#"
                className="d-flex justify-content-center align-items-center mt-1" style={{textDecoration:"none"}}
              >
                Forgotten password?
              </Link>
              <hr />
              <Button
                variant="success"
                className="d-flex justify-content-center align-items-center w-100 mt-3"
                onClick={handleShow}
              >
                Create New Account
              </Button>
            </Form>

            {/* Registration Modal */}
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title className="w-100 text-center">
                  Create New Account
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <div className="row">
                    <div className="col-md-6">
                      <label>First Name</label>

                      <Form.Control placeholder="First Name" required />
                    </div>
                    <div className="col-md-6">
                      <label>Last Name</label>

                      <Form.Control placeholder="Last Name" required />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Phone</label>
                      <Form.Control type="tel" placeholder="Phone" required />
                    </div>
                    <div className="col-md-6">
                      <label>Email</label>
                      <Form.Control type="email" placeholder="Email" required />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Password</label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Confirm Password</label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        required
                      />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <label>Data of Birth</label>
                    <div className="col-md-4">
                      <Form.Select aria-label="Default select example">
                        <option>Days</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                      </Form.Select>
                    </div>
                    <div className="col-md-4">
                      <Form.Select aria-label="Default select example">
                        <option>Month</option>
                        <option value="January">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </Form.Select>
                    </div>
                    <div className="col-md-4">
                      <Form.Select aria-label="Default select example">
                        <option>Year</option>
                        <option value="1">2000</option>
                        <option value="2">2001</option>
                        <option value="3">2002</option>
                        <option value="4">2003</option>
                        <option value="5">2004</option>
                        <option value="6">2005</option>
                        <option value="7">2006</option>
                        <option value="8">2007</option>
                        <option value="9">2008</option>
                        <option value="10">2009</option>
                        <option value="11">2010</option>
                        <option value="12">2011</option>
                        <option value="13">2012</option>
                        <option value="14">2013</option>
                        <option value="15">2014</option>
                        <option value="16">2015</option>
                        <option value="17">2016</option>
                        <option value="18">2017</option>
                        <option value="19">2018</option>
                        <option value="20">2019</option>
                        <option value="21">2020</option>
                        <option value="22">2021</option>
                        <option value="23">2022</option>
                        <option value="24">2023</option>
                        <option value="25">2024</option>
                      </Form.Select>
                    </div>
                  </div>

                  <Form.Group className="mt-3">
                    <Form.Label>Gender</Form.Label>
                    <div className="mb-3">
                      <Form.Check
                        inline
                        label="Male"
                        name="radioGroup"
                        type="radio"
                        id="radio-1"
                      />
                      <Form.Check
                        inline
                        label="Female"
                        name="radioGroup"
                        type="radio"
                        id="radio-2"
                      />
                      <Form.Check
                        inline
                        label="Other"
                        name="radioGroup"
                        type="radio"
                        id="radio-3"
                      />
                    </div>
                  </Form.Group>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Select aria-label="Default select example">
                        <option>States</option>
                        <option value="1">Andhra Pradesh</option>
                        <option value="2">Arunanchal Pradesh</option>
                        <option value="3">Assam</option>
                        <option value="4">Bihar</option>
                        <option value="5">Chhattisgarh</option>
                        <option value="6">Goa</option>
                        <option value="7">Gujrat</option>
                        <option value="8">Haryana</option>
                        <option value="9">Himanchal Pradesh</option>
                        <option value="10">Jharkhand</option>
                        <option value="11">Karnataka</option>
                        <option value="12">Kerala</option>
                        <option value="13">Madhya Pradesh</option>
                        <option value="14">Maharastra</option>
                        <option value="15">Manipur</option>
                        <option value="16">Meghalaya</option>
                        <option value="17">Mizoram</option>
                        <option value="18">Nagaland</option>
                        <option value="19">Odisha</option>
                        <option value="20">Punjab</option>
                        <option value="21">Rajasthan</option>
                        <option value="22">Sikkim</option>
                        <option value="23">Tamil Nadu</option>
                        <option value="24">Telangana</option>
                        <option value="25">Tripura</option>
                        <option value="26">Uttar Pradesh</option>
                        <option value="27">Uttarakhand</option>
                        <option value="28">West Bengal</option>
                      </Form.Select>
                    </div>
                    <div className="col-md-6">
                      <Form.Select
                        aria-label="Default select example"
                        className="form-floating"
                      >
                        <option>City</option>
                      </Form.Select>
                    </div>
                  </div>
                  <p className="text-center mb-1 content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempore dignissimos obcaecati blanditiis, nemo nam dicta aperiam vitae eos asperiores modi molestiae veniam beatae ab ducimus assumenda saepe minima nisi!
                  </p>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 mt-2"
                    block
                  >
                    Sign Up
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      
      </div>
    </>
  );
}
