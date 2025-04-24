import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-name">
        <h1>Sumayya</h1>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>

      <ul className={`nav-links ${menuOpen ? "mobile" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/education" onClick={() => setMenuOpen(false)}>Education</Link></li>
        <li><Link to="/Skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
        <li><Link to="/work" onClick={() => setMenuOpen(false)}>Work</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
