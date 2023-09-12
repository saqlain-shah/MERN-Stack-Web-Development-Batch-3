import React from 'react'

function Blog() {
  return (
    <>
       {/* <!-- blog section --> */}
    <section className="section" id="blog">
        {/* <!-- container --> */}
        <div className="container text-center">
            <p className="section-subtitle">Recent Posts?</p>
            <h6 className="section-title mb-6">Blog</h6>
            {/* <!-- blog-wrapper --> */}
            <div className="blog-card">
                <div className="blog-card-header">
                    <img src="assets/imgs/img-1.jpg" className="blog-card-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                </div>
                <div className="blog-card-body">
                    <h5 className="blog-card-title">Consectetur adipisicing elit</h5>

                    <p className="blog-card-caption">
                        <a href="#">By: Admin</a>
                        <a href="#"><i className="ti-heart text-danger"></i> 234</a>
                        <a href="#"><i className="ti-comment"></i> 123</a>
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nesciunt qui sit velit delectus voluptates, repellat ipsum culpa id deleniti. Rerum debitis facilis accusantium neque numquam mollitia modi quasi distinctio.</p>

                    <p><b>Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid consequuntur repudiandae.</b></p>
                    <p>Magnam in repellat enim harum omnis aperiam! Explicabo illo, commodi, dolor blanditiis cupiditate harum nisi vero accusamus laudantium voluptatibus dolores quae obcaecati.</p>

                    <a href="#" className="blog-card-link">Read more <i className="ti-angle-double-right"></i></a>
                </div>
            </div>
            {/* <!-- end of blog wrapper --> */}

            {/* <!-- blog-wrapper --> */}
            <div className="blog-card">
                <div className="blog-card-header">
                    <img src="assets/imgs/img-2.jpg" className="blog-card-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                </div>
                <div className="blog-card-body">
                    <h5 className="blog-card-title">Explicabo illo</h5>

                    <p className="blog-card-caption">
                        <a href="#">By: Admin</a>
                        <a href="#"><i className="ti-heart text-danger"></i> 456</a>
                        <a href="#"><i className="ti-comment"></i> 264</a>
                    </p>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi laborum enim, vitae ipsam atque eum, ad iusto consequuntur voluptas, esse doloribus. Perferendis porro quisquam vitae exercitationem aliquid, minus eos laborum repudiandae, cumque debitis iusto omnis praesentium? Laborum placeat sit adipisci illum tempore maxime, esse qui quae? Molestias excepturi corporis similique doloribus. Esse vitae earum architecto nulla non dolores illum at perspiciatis quod, et deleniti cupiditate reiciendis harum facere, delectus eum commodi soluta distinctio sit repudiandae possimus sunt. Ipsum, rem.</p>

                    <a href="#" className="blog-card-link">Read more <i className="ti-angle-double-right"></i></a>
                </div>
            </div>
            {/* <!-- end of blog wrapper --> */}

        </div>
        {/* <!-- end of container --> */}
    </section>
    {/* <!-- end of blog section --> */}

    </>
  )
}

export default Blog
