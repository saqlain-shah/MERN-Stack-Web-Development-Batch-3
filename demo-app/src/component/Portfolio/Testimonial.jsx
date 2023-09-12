import React from 'react'

export default function Testimonial() {
  return (
    <>
  {/* <!-- testimonial section --> */}
    <section className="section" id="testmonial">
        <div className="container text-center">
            <p className="section-subtitle">What Think Client About Me ?</p>
            <h6 className="section-title mb-6">Testmonial</h6>

            {/* <!-- row --> */}
            <div className="row">
                <div className="col-md-6">
                    <div className="testimonial-card">
                        <div className="testimonial-card-img-holder">
                            <img src="assets/imgs/avatar2.jpg"/> className="testimonial-card-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page///>                           
                        </div>
                        <div className="testimonial-card-body">
                            <p className="testimonial-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.</p>
                            <h6 className="testimonial-card-title">Emily Reb</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="testimonial-card">
                        <div className="testimonial-card-img-holder">
                            <img src="assets/imgs/avatar3.jpg" className="testimonial-card-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>                        
                        </div>
                        <div className="testimonial-card-body">
                            <p className="testimonial-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.</p>
                            <h6 className="testimonial-card-title">Emily Reb</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/* <!-- end of container --> */}
    </section>
     {/* <!-- end of testimonial section --> */}
    </>
  )
}
