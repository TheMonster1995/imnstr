import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import "./navbar.css";
import "./general.css";

const Navbar = props => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className='navbar-brand' to="/">
          <img src="logo.png" />
        </Link>
        <button className="navbar-toggler" type="button" onClick={() => setMenuOpen(!menuOpen)}>
          <i className='bi bi-signpost-2'></i>
          <span className='small muted d-block'>menu</span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${menuOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 overflow-hidden rounded">
            <li className="nav-item">
              <Link className={`nav-link me-md-4 fw-bold ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link me-md-4 fw-bold ${location.pathname === '/projects' ? 'active' : ''}`} to="/projects">Proejcts</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link me-md-4 fw-bold ${location.pathname === '/experiences' ? 'active' : ''}`} to="/experiences">Experiences</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link me-md-4 fw-bold ${location.pathname === '/services' ? 'active' : ''}`} to="/services">Services</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
