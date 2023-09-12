import React from 'react'

export default function Footer() {
  return (
    <>
        {/* <!-- footer --> */}
    <div className="container">
        <footer className="footer">       
            <p className="mb-0">Copyright <script>document.write(new Date().getFullYear())</script> &copy; <a href="http://www.devcrud.com">DevCRUD</a></p>
            <div className="social-links text-right m-auto ml-sm-auto">
                <a href="javascript:void(0)" className="link"><i className="ti-facebook"></i></a>
                <a href="javascript:void(0)" className="link"><i className="ti-twitter-alt"></i></a>
                <a href="javascript:void(0)" className="link"><i className="ti-google"></i></a>
                <a href="javascript:void(0)" className="link"><i className="ti-pinterest-alt"></i></a>
                <a href="javascript:void(0)" className="link"><i className="ti-instagram"></i></a>
                <a href="javascript:void(0)" className="link"><i className="ti-rss"></i></a>
            </div>
        </footer>
    </div>
     {/* <!-- end of page footer --> */}
    </>
  )
}
