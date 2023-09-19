import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <React.Fragment>

            <header
                style={{ backgroundColor: "blue" }}
                id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">

                    <h1 className="logo"><a href="index.html">DevFolio</a></h1>
                    <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link to="/hero" className="nav-link scrollto active">Home</Link></li>
                            <li><Link to="/about" className="nav-link scrollto">About</Link></li>
                            <li><Link to="/service" className="nav-link scrollto">Services</Link></li>
                            <li><Link to="/contact" className="nav-link scrollto">Contact</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>

        </React.Fragment>
    )
}

export default Header;

