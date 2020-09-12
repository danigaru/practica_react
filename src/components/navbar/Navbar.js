import React from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <NavLink to="/" className="navbar-brand">
        HeroApp
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <NavLink activeClassName="active" to="/dc" className="nav-link">
            DC
          </NavLink>
          <NavLink to="/marvel" className="nav-link">
            Marvel
          </NavLink>
          <NavLink to="/search" className="nav-link">
            Search
          </NavLink>
        </ul>

        <div className="text-right">
          <NavLink to="/logout" className="nav-link">
            Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
