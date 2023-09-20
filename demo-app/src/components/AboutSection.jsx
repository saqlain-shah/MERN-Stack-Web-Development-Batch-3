import React from 'react';

const AboutSection = () => {
    return (
        <div id="about" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-11 wow fadeInLeft" data-wow-delay="0.9s">
                        <h2>ABOUT WAJU RIZVI</h2>
                        <h4>DESIGNER &amp; DEVELOPER</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
                            Dolore magna aliquam erat volutpat.
                        </p>
                        <p>
                            Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                            euismod tincidunt ut laoreet.
                        </p>
                    </div>
                    <div className="col-md-6 col-xs-11 wow fadeInRight" data-wow-delay="0.9s">
                        <span className="text-top">Web Design <small>95%</small></span>
                        <div className="progress">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '95%' }}></div>
                        </div>
                        <span>MERN Stack Devlopment <small>80%</small></span>
                        <div className="progress">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
                        </div>
                        <span>Cyber security<small>50%</small></span>
                        <div className="progress">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}></div>
                        </div>
                        <span>HTML5 &amp; CSS3 <small>90%</small></span>
                        <div className="progress">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
