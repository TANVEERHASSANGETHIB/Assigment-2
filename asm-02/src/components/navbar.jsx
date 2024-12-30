import React from "react";

const Navbar = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <h1 className="sitename">Yummy</h1>
          <span>.</span>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#chefs">Chefs</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="#book-a-table">Book a Table</a>
      </div>
    </header>
  );
};

export default Navbar;  // Default export
