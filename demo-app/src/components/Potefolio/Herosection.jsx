import React from "react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <React.Fragment>
      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <h1>Shahzaib Ali</h1>
          <p>
            I'm{" "}
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            >
              UX/UI Designer And MERN Stack Developer
            </span>
          </p>
          <div className="social-links">
            <Link to="https://twitter.com/Muhamma08970093" className="twitter">
              <i className="bx bxl-twitter"></i>
            </Link>
            <Link
              to="https://www.facebook.com/sameer.lahari.1"
              className="facebook"
            >
              <i className="bx bxl-facebook"></i>
            </Link>
            <Link
              to="https://github.com/muhammadrafiq704"
              className="google-plus"
            >
              <i className="bx bxl-github"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/in/muhammad-rafiq-337747231/"
              className="linkedin"
            >
              <i className="bx bxl-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroSection;