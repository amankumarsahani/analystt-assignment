import "./Component.css";

import { React, useState } from "react";
import NavLink from "./NavLink";

function Navbar(props) {
  
  return (
    <div>
      <nav class="navbar  navbar-dark bg-dark fixed-top px-5">
        <div class="container-fluid">
          <a
            class="navbar-brand"
            style={{ fontWeight: "bolder", fontSize: "x-large" }}
            href="/"
          >
            Dummy News Website
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5
                class="offcanvas-title"
                id="offcanvasNavbarLabel"
                style={{ fontWeight: "bolder", fontSize: "x-large" }}
              >
                Dummy News Website
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul
                class="navbar-nav justify-content-end flex-grow-1 pe-3"
                style={{ fontWeight: "bold", fontSize: "large" }}
              >
                <NavLink name="Home" handleClick={props.handleClick} />
                <NavLink
                  name="Business"
                  handleClick={props.handleClick}
                />
                <NavLink
                  name="Entertainment"
                  handleClick={props.handleClick}
                />
                <NavLink name="General" handleClick={props.handleClick} />
                <NavLink name="Health" handleClick={props.handleClick} />
                <NavLink name="Science" handleClick={props.handleClick} />

                <NavLink name="Sports" handleClick={props.handleClick} />
                <NavLink
                  name="Technology"
                  handleClick={props.handleClick}
                />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
