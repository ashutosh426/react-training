import React from "react";
import { Link, Outlet } from "react-router-dom";

function HooksHeader() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="use-state">
                useState Demo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="use-context">
                useContext Demo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="class-demo">
                class Demo 1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="use-effect">
                useEffect Demo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="custom-hook">
                Custom Hook Demo
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default HooksHeader;
