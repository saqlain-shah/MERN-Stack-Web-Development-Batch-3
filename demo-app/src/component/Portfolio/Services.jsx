import React from 'react'

export default function Services() {
  return (
    <>
      {/* <!-- service section --> */}
    <section className="section" id="service">
        <div className="container text-center">
            <p className="section-subtitle">What I Do ?</p>
            <h6 className="section-title mb-6">Service</h6>
            {/* <!-- row --> */}
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="body">
                            <img src="assets/imgs/pencil-case.svg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon"/>
                            <h6 className="title">Adipisicing</h6>
                            <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="body">
                            <img src="assets/imgs/responsive.svg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon"/>
                            <h6 className="title">Sapiente</h6>
                            <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="body">
                            <img src="assets/imgs/toolbox.svg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon"/>
                            <h6 className="title">Placeat</h6>
                            <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="service-card">
                        <div className="body">
                            <img src="assets/imgs/analytics.svg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" className="icon"/>
                            <h6 className="title">Iusto</h6>
                            <p className="subtitle">Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end of row --> */}
        </div>
    </section>
    {/* <!-- end of service section --> */}
    </>
  )
}
