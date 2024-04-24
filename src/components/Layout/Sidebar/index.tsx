import React, { useCallback } from "react";
import "./style.css";
import { contextReducer } from "@/contextApi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
	const { dispatch } = contextReducer();

	const logout = useCallback(() => {
    dispatch({
      type: "LOGOUT",
    });
  }, [dispatch]);
	
  return (
    <div className="container-fluid main-sidebar">
      <div className="row">
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
          style={{ height: "100vh" }}
        >
          <a
            href="#"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span className="fs-4">Brand Name</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" aria-current="page">
                <span className="bi bi-house-fill me-2"></span> Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/listing" className="nav-link">
                <span className="bi bi-gear-fill me-2"></span> Listing
              </NavLink>
            </li>
            <li className="nav-item" onClick={logout}>
              <a href="#" className="nav-link">
                <span className="bi bi-box-arrow-in-right me-2"></span> Logout
              </a>
            </li>
          </ul>
        </div>
        <div className="col col-md-10 col-lg-10">
          <p>This is the main content area of your webpage.</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
