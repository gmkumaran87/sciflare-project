import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";

const Navbar = () => {
  const { isNavBar } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(authActions.logout());
  };
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
          {!isNavBar && (
            <li>
              <NavLink className="link" to="/login" onClick={handleLogout}>
                Logout
              </NavLink>
            </li>
          )}
          {isNavBar && (
            <>
              <li>
                <NavLink className="link" to="/login">
                  Login
                </NavLink>
              </li>
              <li>Register</li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
