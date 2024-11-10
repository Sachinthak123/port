import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [menu] = useState([
    { title: "Home", link: "/", id: "1" },
    { title: "About", link: "/about", id: "2" },
    { title: "Contact", link: "/contact", id: "3" },
  ]);

  // State to control navbar collapse
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  // Handle collapse toggle
  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  // Handle closing navbar when link is clicked
  const closeNavbar = () => {
    setIsNavbarCollapsed(true);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      style={{ padding: "0.5rem 1rem" }}
    >
      <div className="container-fluid">
        {/* Brand */}
        <NavLink className="navbar-brand" to='/'>
          <span className="border border-success border-3 p-1 text-uppercase fw-bold rounded-start bg-light text-dark">
            Port
          </span>
          <span className="border border-danger border-3 p-1 text-uppercase fw-bold rounded-end bg-warning text-dark">
            Folio
          </span>
        </NavLink>

        {/* Toggler button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavbarCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isNavbarCollapsed ? "" : "show"}`} id="navbarNav">
          <ul className="navbar-nav d-flex flex-column flex-lg-row gap-4 text-center">
            {menu.map((link) => (
              <li className="nav-item" key={link.id}>
                <NavLink
                  to={link.link}
                  style={({ isActive }) => ({
                    color: isActive ? "#FF4500" : "#ffffff",
                    textDecoration: "none",
                  })}
                  onClick={closeNavbar} // Close navbar on link click
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
