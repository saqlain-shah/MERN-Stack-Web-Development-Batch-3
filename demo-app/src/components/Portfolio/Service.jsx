import React from 'react'
import '../DevFolio/assets/css/style.css'

const Service = () => {
    const DATA = [
        {
            id: 1,
            title: "Web Design",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, odio eget bibendum aliquam, ipsum justo cursus lectus,"
        },
        {
            id: 2,
            title: "Graphic Design ",
            desc: "sit amet tincidunt velit nunc sit amet libero. Nullam scelerisque justo vitae erat malesuada, ut varius neque tristique. Fusce id leo ac libero"
        },
        {
            id: 3,
            title: "App Development ",
            desc: "auctor suscipit. Aenean fermentum, turpis a volutpat bibendum, eros dolor iaculis velit, sit amet pharetra est nisi id nulla. Vivamus sit amet "
        },
        {
            id: 4,
            title: "Software Development ",
            desc: "tortor in lectus luctus posuere. Nullam et lacus nec justo dictum volutpat in a neque. Suspendisse potenti. Vivamus nec mauris vitae "
        },
        {
            id: 5,
            title: "UI/UX",
            desc: "risus hendrerit bibendum vel ac urna. Integer pharetra id sem non iaculis. Quisque ut libero vitae sapien placerat convallis eu a nunc. "
        },
        {
            id: 6,
            title: "Web Development ",
            desc: "Curabitur sagittis velit vitae vestibulum. Sed dignissim pharetra sollicitudin. Proin rhoncus mauris ac tellus congue euismod."
        },
    ]
    return (
        <React.Fragment>
            <section id="services" className="services-mf pt-5 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">
                                    Services
                                </h3>
                                <p className="subtitle-a">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>


                    {
                        DATA.map((data) => {
                            return (

                                <div key={data.id} className="row" >
                                    <div className="col-md-4">
                                        <div className="service-box">
                                            <div className="service-ico">
                                                <span className="ico-circle"><i className="bi bi-briefcase"></i></span>
                                            </div>
                                            <div className="service-content">
                                                <h2 className="s-title">{data.title}</h2>
                                                <p className="s-description text-center">
                                                    {data.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>)


                        })}


                </div>
            </section>

        </React.Fragment>
    )
}


export default Service;
