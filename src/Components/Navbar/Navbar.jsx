/* eslint-disable no-template-curly-in-string */
import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

  const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
      <nav
      className="navbar is primary"
      role="navigation"
      aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">  
            <Link
              role="button"
              // eslint-disable-next-line no-template-curly-in-string
              className={'navbar-burger burger ${isOpen && "is-active"}'}
              aria-label="menu"
              aria-expanded="false"
              onClick={() => setOpen(!isOpen)}
              >
            
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </Link>
        </div>
        
        <div className={'navbar-menu ${isOpen && "is-active"}'}>
          <div className="navbar-start">
            <NavLink 
            className="navbar-item" 
            acitveClassname="is-active" to="/"
            >
              Home
            </NavLink>

            <NavLink 
            className="navbar-item"
            acitveClassName="is-active"
            to="/about"
            >
              About
            </NavLink>

            <NavLink
            className="navbar-item"
            acitveClassName="is-active"
            to="/profile"
            >
              Profile
            </NavLink>
          </div>
          
         <div className="navbar-end">
           <div className="navbar-item">
             <div className="button">
               <Link className="button is-white">Log In</Link>
             </div>
           </div>
          </div>
        </div>   
      </div>   
    </nav>
  );
}

export default Navbar; 