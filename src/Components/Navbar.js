import "./Component.css";

import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 ">
        <div className="container-fluid">
          <a className="navbar-brand" style={{fontWeight:"bolder",color:"purple",fontSize:"x-large"}} href="/">
            Demo News Site
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
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 text-center " style={{fontSize:"large"}}>
              <li className="nav-item mx-3">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
