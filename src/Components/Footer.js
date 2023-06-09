import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Footer() {
  const padd = {
    padding: "20px",
  };
  return (
    <div>
      {/* <!-- Footer --> */}
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <img src="./images/Logo.svg" alt="logo" />
                  <span style={{ fontSize: "25px" }}>
                    <b>Interno</b>
                  </span>
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
                <img style={padd} src="./images/facebook.svg" alt="logo" />
                <img style={padd} src="./images/instagram.svg" alt="logo" />
                <img style={padd} src="./images/linkdln.svg" alt="logo" />
                <img style={padd} src="./images/twitter.svg" alt="logo" />
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Pages</h6>
                <p>
                  <Link to="/About" className="text-reset">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link to="/project" className="text-reset">
                    Our Projects
                  </Link>
                </p>
                <p>
                  <Link to="/Team" className="text-reset">
                    Our Team
                  </Link>
                </p>
                <p>
                  <Link to="/Contact" className="text-reset">
                    Contact us
                  </Link>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Services</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Kitchen
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Living Area
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Bathroom
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Bedroom
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  Contact@interno.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-4">
          Copyright © Interno | Designed By Amit Kathayat - Powered By Netskill
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </div>
  );
}
