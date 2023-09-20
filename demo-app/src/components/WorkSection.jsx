import React from 'react';

const WorkSection = () => {
    return (
        <div id="work" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 wow bounce">
                        <h2>WHAT I DO</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="media">
                            <div className="media-object media-left">
                                <i className="fa fa-laptop"></i>
                            </div>
                            <div className="media-body">
                                <h3 className="media-heading">Full Stack Development</h3>
                                <p>We will done your future website with new updated futures.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="media"> 
                            <div className="media-object media-left">
                                <i className="fa fa-link"></i>
                            </div>
                            <div className="media-body">
                                <h3 className="media-heading">Programing</h3>
                                <p>We manage any type of project such as final year projects in any programing languages.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="media">
                            <div className="media-object media-left">
                                <i className="fa fa-paper-plane"></i>
                            </div>
                            <div className="media-body">
                                <h3 className="media-heading">React Developer</h3>
                                <p>We can provide best service for you in any single page website.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkSection;
