import React from "react";
import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      Create Employees Data
      <div>
        <button>
          <Link
            to="/sign-in"
            style={{ textDecoration: "none", color: "black" }}
          >
            Login
          </Link>
        </button>
        <button>
          <Link
            to="/sign-up"
            style={{ textDecoration: "none", color: "black" }}
          >
            Sign Up
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
