import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar is-primary" role="navigation"
         aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <strong>Restwise</strong>
        </a>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>

          <a className="navbar-item" href="/about">
            About
          </a>

          <a className="navbar-item" href="/contact">
            Contact
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-light" href="/login">
                Log in
              </a>
              <a className="button is-primary" href="/signup">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;