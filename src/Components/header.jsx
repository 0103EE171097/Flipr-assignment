import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/img/logo.svg";
import profile from "../Assets/img/profile.svg";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm header">
      <Link className="navbar-brand ml-5 " to="/">
        <img
          src={logo}
          width="50"
          height="30"
          className="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
        <div style={{ color: "white" }}>Intugine</div>
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink
              className="nav-link"
              exact
              activeClassName="action-show"
              to="/"
            >
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
