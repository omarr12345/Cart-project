import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "./Components/CartIcon";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Cart Store
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <CartIcon />
      </nav>
    </div>
  );
}

export default Navbar;
