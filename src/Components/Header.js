import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Header() {
  return (
    <>
      <nav>
        <img src="./images/Logo.svg" alt="logo" />
        <h2 style={{ paddingRight: "440px" }}>Interno</h2>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">AboutUs</NavLink>
        <NavLink to="/Services">Services</NavLink>
        <NavLink to="/Project">Project</NavLink>
        <NavLink to="/Blog">Blog</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <img src="./images/Vector.svg" alt="Search" />
      </nav>
    </>
  );
}
