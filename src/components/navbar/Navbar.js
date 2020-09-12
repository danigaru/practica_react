import React from "react";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
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
          <a className="nav-link" href="#">
            DC <span className="sr-only">(current)</span>
          </a>
          <a className="nav-link" href="#">
            Marvel
          </a>
        </ul>

        <div className="text-right">
          <a className="nav-link" href="#">
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
}
