import React from "react";
import { Link } from "react-router-dom";
// import "../../../public/assets/css/ServicesCss.css"
const Services = () => {
  const Data = [
    {
      id: "1",
      title: "React.js",
      desc: `
      React.js services involve building dynamic, 
      high-performance user interfaces for web applications using reusable components, 
      state management, and a virtual DOM. 
      React developers create interactive and responsive front-end experiences 
      while collaborating with back-end and UX teams to deliver seamless user experiences.`,
    },
    {
      id: "2",
      title: "UI Material",
      desc: `  
    Material-UI services revolve around implementing the Material Design system for user interfaces.
    Specialists use Material-UI, a React component library, 
    to create visually appealing and consistent UI components, 
    ensuring a cohesive and modern user experience across web applications.`
    },
    {
      id: "3",
      title: "Node.js/Mongo DB",
      desc: `
      Combining MongoDB and Node.js services, 
      these offerings cover the full spectrum of modern web application development. 
      MongoDB specialists focus on designing and managing NoSQL databases, optimizing data storage and
      retrieval, and ensuring scalability. On the other hand, 
      Node.js services leverage its runtime environment to build robust, 
      server-side applications, including APIs and real-time systems, 
      delivering high performance and responsiveness. 
      Together, these services provide comprehensive solutions for creating efficient and 
      scalable web applications with dynamic data management and server-side functionality.`,
    },
    {
      id: "4",
      title: "Express.js",
      desc: `
      Express.js services involve the development of web applications and 
      APIs using the Express.js framework for Node.js. Express.js specialists create efficient 
      and scalable server-side solutions, handling routing, middleware integration, 
      and request handling to build fast and responsive web applications.`,
    },
    {
      id: "5",
      title: "Production Design",
      desc: `
      Production design services focus on translating design 
      concepts into final deliverables for manufacturing or development, ensuring visual and 
      functional consistency while considering production constraints and materials.`,
    },
    {
      id: "6",
      title: "Interactive Design",
      desc: `
      Prototyping services assist in building interactive models or mockups of products or 
      applications, allowing stakeholders to visualize and 
      test design concepts before full development, 
      saving time and resources.`,
    },
    {
      id: "7",
      title: "Research Plans",
      desc: `
      Research plan services entail crafting comprehensive plans for user research, 
      outlining objectives, methods, and timelines to gather valuable insights, 
      guiding the design process with data-driven decisions.`,
    },
    {
      id: "8",
      title: "Prototypying",
      desc: `
      Prototyping services assist in building interactive models or mockups of products or 
      applications, allowing stakeholders to visualize and 
      test design concepts before full development, 
      saving time and resources.`,
    },
    {
      id: "9",
      title: "Testing",
      desc: `
      Testing UX/UI services involve evaluating user interfaces for usability, 
      accessibility, and overall user satisfaction through methods like usability testing,
       heuristic evaluation, and A/B testing, ensuring a user-centric design.`,
    },
  ];
  return (
    <React.Fragment>
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <p>
             There are some market demanding skills please go through thoroughly and feel free to contact me 
            </p>
          </div>

          <div className="services-container">
          {Data.map((data) => {
            return (
              <div key={data.id} className="service-item">
                <div
                  className="col col-md-6  align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay="100"

                >
                  <div className="icon-box iconbox-blue  ">
                    <div className="icon">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 600 600"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          stroke-width="0"
                          fill="#f5f5f5"
                          d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                        ></path>
                      </svg>
                      <i className="bx bxl-dribbble"></i>
                    </div>
                    <h4>
                      <Link to="">{data.title}</Link>
                    </h4>
                    <p>{data.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Services;