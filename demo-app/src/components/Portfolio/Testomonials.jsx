import React from 'react'
import '../DevFolio/assets/css/style.css'
const Testomonials = () => {
    return (
        <React.Fragment>
            <div class="testimonials paralax-mf bg-image"
                style={{ backgroundImage: " url(assets/img/overlay-bg.jpg)" }}>
                <div class="overlay-mf"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">

                            <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                                <div class="swiper-wrapper">

                                    <div class="swiper-slide">
                                        <div class="testimonial-box">
                                            <div class="author-test">
                                                <img src="assets/img/testimonial-2.jpg" alt="" class="rounded-circle b-shadow-a" />
                                                <span class="author">Xavi Alonso</span>
                                            </div>
                                            <div class="content-test">
                                                <p class="description lead">
                                                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                </p>
                                            </div>
                                        </div>
                                    </div>End testimonial item

                                    <div class="swiper-slide">
                                        <div class="testimonial-box">
                                            <div class="author-test">
                                                <img src="assets/img/testimonial-4.jpg" alt="" class="rounded-circle b-shadow-a" />
                                                <span class="author">Marta Socrate</span>
                                            </div>
                                            <div class="content-test">
                                                <p class="description lead">
                                                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>

                            <div id="testimonial-mf" class="owl-carousel owl-theme">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}



export default Testomonials 
