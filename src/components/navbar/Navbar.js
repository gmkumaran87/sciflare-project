import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <h2 className="nav_title">Sciflare User Admin</h2>
      </div>

      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <NavLink className="link" to="/add-user">
              Add User
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/login">
              Login
            </NavLink>
          </li>
          <li>Register</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
