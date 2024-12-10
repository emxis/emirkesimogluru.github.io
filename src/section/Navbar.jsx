import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg">
      <div className="container-lg pt-1">
        <Link className="navbar-brand text-light" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <Link className="nav-link text-light" to="/">
              Ana Sayfa
            </Link>
            <Link className="nav-link text-light" to="/sertifika">
              Sertifikalar
            </Link>
            <Link className="nav-link text-light" to="/youtube">
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
