import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function MenuBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">MongoDB VS. MySQL APP</Link>
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
              <Link className="nav-link" to="/">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/insert">Insert</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/select">Select</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/update">Update</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/delete">Delete</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resource">Resource Usage</Link>
            </li>
          </ul>
          {/* <div className="d-flex">
            <button className="btn btn-outline-light me-2" type="button">Logout</button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default MenuBar;
