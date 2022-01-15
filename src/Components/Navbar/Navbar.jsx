/* eslint-disable no-template-curly-in-string */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = ({ user }) => {
  const [isOpen, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem('token');
    window.location = '/login';
  }

  return (


    <nav
      className="navbar is primary"
      role="navigation"
      aria-label="main-navigation"
    >

      <div className="container">
        <div className="navbar-brand">
          <h1>MUSICC MIXXER</h1>
        </div>

        <div className={'navbar-menu ${isOpen && "is-active"}'}>
          <div className="navbar-start">

            <NavLink
              className="navbar-item"
              activeClassname="is-active" to="/"
            >
              Home/
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/signup"
            >
              Signup/
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/login"
            >
              Login/
            </NavLink>
            {user && (
              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/login"
                onClick={logout}
              >
                Logout
              </NavLink>
            )}


          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="button">
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar;