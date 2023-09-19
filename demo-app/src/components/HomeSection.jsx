import React from 'react';
import './home.css'
const HomeSection = () => {
    return (
        <div  id="home" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 wow fadeIn" data-wow-delay="0.9s">
                        <h2>Syed Wajahat Abbas Rizvi </h2>
                        <h1>Waju Rizvi</h1>
                        <h2 className="rotate">DESIGNER &amp; DEVELOPER, PROJECT LEADER</h2>
                        <p>Hi I am Syed Wajahat Abbas Rizvi a MERN Stack Developer At Rinor Technology</p>
                        <a href="#work" className="btn btn-default smoothScroll wow fadeInUp" data-wow-delay="1s">Get started</a>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection;
