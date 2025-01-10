import React from "react";
import { Link } from "react-router-dom";
import { useAuth0, User } from "@auth0/auth0-react";
export default function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand fs-1" to="/">
            EventHire
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-5 mb-lg-0 p-2">
              <li className="nav-item p-2">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link" to="./aboutus">
                  About
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link" to="./eventlist">
                  Event List
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link" to="./jobpage">
                  Job Page
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link" to="./contactus">
                  Contact Us
                </Link>
              </li>
              <li >
                {isAuthenticated && <p className="text-light mt-3">{user.name}</p>}
              </li>
              {isAuthenticated ? (
                <li className="nav-item p-2">
                  <button
                    to="/"
                    className="btn btn-primary"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log Out{" "}
                  </button>
                </li>
              ) : (
                <li className="nav-item p-2">
                  <Link
                    className="btn btn-primary"
                    onClick={() => loginWithRedirect()}
                    to="/"
                  >
                    Login
                  </Link>
                  
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
