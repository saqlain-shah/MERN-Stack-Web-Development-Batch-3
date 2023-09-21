import React from "react";
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <React.Fragment>
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li>
              <Link to="/" className="nav-link scrollto active">
                <i className="bx bx-home"></i> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link scrollto">
                <i className="bx bx-user"></i> <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/skill" className="nav-link scrollto">
                <i className="bx bx-user"></i> <span>Skills</span>
              </Link>
            </li>
            <li>
              <Link to="/resume" className="nav-link scrollto">
                <i className="bx bx-file-blank"></i> <span>Resume</span>
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="nav-link scrollto">
                <i className="bx bx-book-content"></i> <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link to="/services" className="nav-link scrollto">
                <i className="bx bx-server"></i> <span>Services</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link scrollto">
                <i className="bx bx-envelope"></i> <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;