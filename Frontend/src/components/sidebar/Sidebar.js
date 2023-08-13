import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sidebar_container"
        bis_skin_checked="1"
      >
        <ul className="nav nav-pills flex-column mb-auto nav_container">
          <li className="nav-item">
            <Link to="/" className="nav-link link-body-emphasis">
              Platform Lunch
            </Link>
          </li>
          <li>
            <Link to="/marketing" className="nav-link link-body-emphasis">
              Marketing plan
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link link-body-emphasis">
              Roadmap
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
