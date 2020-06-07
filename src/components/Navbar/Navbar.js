import React from "react";
import { bool, func } from "prop-types";
import "./navbar.scss";

const NavBar = ({ open, setOpen }) => {
  return (
    <div className="navbar-container">
      <a className="brand" href="/">
        Shortly
      </a>
      <div className={"nav-container " + (open ? "navOpen" : "navClosed")}>
        <ul className="navbar ">
          <li className="nav-bar-links">
            <a href="#features">Features</a>
          </li>
          <li className="nav-bar-links">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="nav-bar-links">
            <a href="#resources">Resources</a>
          </li>
        </ul>

        <ul className="user-auth-nav">
          <li className="">
            <a href="#login">Login</a>
          </li>
          <li className="button-link">
            <a href="#signUp">Sign up</a>
          </li>
        </ul>
      </div>
      <div className="hamburger" href="#menu" onClick={() => setOpen(!open)}>
        <div
          style={{
            transform: `${open ? "rotate(45deg)" : "rotate(0)"}`,
          }}
        />
        <div
          style={{
            transform: `${open ? "translateX(20px)" : "translateX(0)"}`,
            opacity: `${open ? "0" : "1"}`,
          }}
        />
        <div
          style={{
            transform: `${open ? "rotate(-45deg)" : "rotate(0)"}`,
          }}
        />
      </div>
    </div>
  );
};

NavBar.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default NavBar;
