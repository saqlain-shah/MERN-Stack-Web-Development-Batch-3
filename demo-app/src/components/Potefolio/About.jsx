import React from "react";

const About = () => {
  return (
    <React.Fragment>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
            <p>
              I'm a person who passionate about his work. I'm UI/UX designer and
              MERN STACK Developer at RINOR TECHNOLOGIES since 1 years. I'm
              providing both technologies to my clients with my core potentials.
              Clients can freely talk to me about both technologies.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <img
                src="/assets/img/myProfile.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>UI/UX Designer &amp; MERN Stack Developer</h3>
              <p className="fst-italic">
                I'm a certified UX designer from GOOGLE and also a MERN Stack
                developer form RINOR TECHNOLOGIES.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Birthday:</strong> <span>16 feb 2003</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Website:</strong> <span>www.example.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong> <span>+92 3555038016</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>City:</strong>{" "}
                      <span>Gilgit Baltistan</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Age:</strong> <span>20</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Degree:</strong> <span>Masters in BSCS</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>PhEmailone:</strong>{" "}
                      <span>shahzaibsheen@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                You can freely talk to me via differents channels which is
                mentioned above I will try to give response as soon as possible
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;