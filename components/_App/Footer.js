// Footer Component Style File Path: styles/footer/footer.scss

import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-widget-logo">
                  <Link href="/">
                    <a>
                      <img src="/images/logo_svg_2.svg" alt="image" />
                    </a>
                  </Link>
                </div>

                <p>
                  Saasgo provides expert IT and consulting solutions to help
                  businesses thrive. Our experienced team delivers custom
                  solutions that meet your unique needs and exceed
                  your expectations.
                </p>

                <ul className="footer-widget-social">
                  <li>
                    <span>Follow us:</span>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="ri-facebook-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="ri-instagram-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ps-5">
                <h3>Quick links</h3>

                <ul className="quick-links">
                  {/* <li>
                    <Link href="/case-studies">
                      <a>Case studies</a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/career">
                      <a>Careers</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service">
                      <a>Terms & conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>Help & FAQ</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>IT Services</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/services-details">
                      <a>IT support services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services-details">
                      <a>IT consultancy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services-details">
                      <a>Cyber security</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services-details">
                      <a>Privacy policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services-details">
                      <a>IT solutions</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>Contact info</h3>

                <ul className="footer-information">
                  <li className="d-flex">
                    <span className="pe-2">Address:</span>
                    413 XYZ North Delhi 110007, India
                  </li>
                  <li className="d-flex">
                    <span className="pe-2">Phone:</span>
                    <a href="tel:15143125678">+91 85068 84052</a>
                  </li>
                  <li className="d-flex">
                    <span className="pe-2">Email:</span>
                    <a href="mailto:hello@biza.com">contact@saasgo.in</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <p>
                Copyright © {currentYear} SaasGo All Rights Reserved by{" "}
                <a href="https://envytheme.com/" target="_blank">
                  Metagate Innovation Pvt. Ltd.
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
