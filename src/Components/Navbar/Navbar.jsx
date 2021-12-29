import React, {useState} from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";

  const Navbar = () => {
    return (
      <div className="Navbar"> 
        <div className="leftSide">
          <div className="Links">
            <a href="/home">Home</a>
            <a href="/feedback">Feedback</a>
            <a href="/aboutus">About Us</a>
            <a href="/contact">Contact</a>
          </div>
        </div> 
        <div className="rightRide">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
        </div>   
      </div>
    );
  }

export default Navbar; 