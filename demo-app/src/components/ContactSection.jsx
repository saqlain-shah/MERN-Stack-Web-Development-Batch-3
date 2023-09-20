import React from 'react';

const ContactSection = () => {
    return (
        <div id="contact" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-lg-offset-1 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <address>
                            <p className="contact-title">CONTACT ME</p>
                            <p><i className="fa fa-phone"></i> 03554396320</p>
                            <p><i className="fa fa-envelope-o"></i> wajurizvi@gmail.com</p>
                            <p><i className="fa fa-map-marker"></i> Rinor Tech,juma masjit road</p>
                        </address>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-10 wow fadeInUp" data-wow-delay="0.6s">
                        <form role="form" method="post" action="#">
                            <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" />
                            <input name="email" type="email" className="form-control" id="email" placeholder="Your Email" />
                            <textarea name="message" rows="5" className="form-control" id="message" placeholder="Your Message"></textarea>
                            <input name="send" type="submit" className="form-control" id="send" value="SEND ME" />
                        </form>
                    </div>
                    <div className="col-md-1 col-sm-1"></div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
