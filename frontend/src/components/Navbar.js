import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Import your CSS to style the navbar

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/report">Report Hazard</Link>
      <Link className="nav-link" to="/map">Map View</Link>
    </nav>
  );
}

export default Navbar;