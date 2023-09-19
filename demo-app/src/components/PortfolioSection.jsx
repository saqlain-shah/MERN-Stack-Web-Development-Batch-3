import image1 from './images/portfolio-img1.jpg'
import image2 from './images/portfolio-img2.jpg'
import image3 from './images/portfolio-img3.jpg'
import image4 from './images/portfolio-img4.jpg'
import image5 from './images/portfolio-img5.jpg'
import React from 'react';
const one=image1;

const PortfolioSection = () => {
    return (
        <div id="portfolio" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="wow bounce">PORTFOLIO</h2>
                    </div>
                    <div className="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
                            <img src={one} className="img-responsive" alt="portfolio img" />
                            <div className="portfolio-overlay">
                                <h4>Web Design</h4>
                                <h5>Author: Cindy</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
             <img src={image2} className="img-responsive" alt="portfolio img" />
                            <div className="portfolio-overlay">
                                <h4>Web App</h4>
                                <h5>Author: Waju Rizvi </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
                            <img src={image3} className="img-responsive" alt="portfolio img" />
                            <div className="portfolio-overlay">
                                <h4>Programing</h4>
                                <h5>Author: Waju Rizvi</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
                            <img src={image4} className="img-responsive" alt="portfolio img" />
                            <div className="portfolio-overlay">
                                <h4>Old Artwork</h4>
                                <h5>waju rizvi</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
                            <img src={image5} className="img-responsive" alt="portfolio img" />
                            <div className="portfolio-overlay">
                                <h4>Cyber Security</h4>
                                <h5>Author: Waju Rizvi</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;
