import React from 'react';
import doctorImg from '../../../../../assets/images/export-doctor-img.jpg'
import heroImg from '../../../../../assets/images/hero-img.png'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css" 



const HeroSection = () => {

  React.useEffect(() => {
    AOS.init({duration:4000})
  }, []);

  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Hero Content Start */}
            <div
              className="hero-content"
              data-aos="fade-down"
            >
              {/* Section Title Start */}
              <div className="section-title">
                <h1
                  className="text-anime-style-2"
                  data-cursor="-opaque"
                  data-aos="fade-down"
                  data-aos-duration="2200"
                >
                  <span>Destination</span> For Relief & Wellness
                </h1>
                <p
                  className="wow fadeInUp"
                  data-wow-delay="0.25s"
                  data-aos="fade-up"
                  data-aos-duration="2200"
                >
                  It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the Ipsum less normal distribution of letters.
                </p>
              </div>
              {/* Section Title End */}

              {/* Hero Content Body Start */}
              <div
                className="hero-content-body wow fadeInUp"
                data-wow-delay="0.5s"
                data-aos="fade-up"
                data-aos-duration="2200"
              >
                <Link to={'our-detail'} className="btn-default">
                  Explore Services
                </Link>
                <Link to={'book-appointment'} className="btn-default btn-highlighted">
                  Book Appointment
                </Link>
              </div>
              {/* Hero Content Body End */}

              {/* Hero Content Footer Start */}
              <div
                className="hero-content-footer"
                data-aos="fade-up"
                data-aos-duration="2200"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-auto">
                    {/* Hero Counter Box Start*/}
                    <div
                      className="hero-counter-box"
                      data-aos="fade-up"
                      data-aos-duration="2200"
                    >
                      <h3>
                        <span className="counter">24</span>/7
                      </h3>
                      <p>Emergency Care</p>
                    </div>
                    {/* Hero Counter Box End*/}
                  </div>

                  <div className="col-lg-4 col-md-4 col-auto">
                    {/* Hero Counter Box Start*/}
                    <div
                      className="hero-counter-box"
                      data-aos="fade-up"
                      data-aos-duration="2200"
                    >
                      <h3>
                        <span className="counter">80</span>+
                      </h3>
                      <p>Doctors</p>
                    </div>
                    {/* Hero Counter Box End*/}
                  </div>

                  <div className="col-lg-4 col-md-4 col-auto">
                    {/* Hero Counter Box Start*/}
                    <div
                      className="hero-counter-box"
                      data-aos="fade-up"
                      data-aos-duration="2200"
                    >
                      <h3>
                        <span className="counter">100</span>k+
                      </h3>
                      <p>Customers</p>
                    </div>
                    {/* Hero Counter Box End*/}
                  </div>
                </div>
              </div>
              {/* Hero Content Footer End */}
            </div>
            {/* Hero Content End */}
          </div>

          <div className="col-lg-6">
            {/* Hero Image Start */}
            <div
              className="hero-image"
              data-aos="fade-down"
              data-aos-duration="2200"
            >
              {/* Hero Img Start */}
              <div className="hero-img">
                <figure>
                  <img src={heroImg} alt="heroImg" />
                </figure>
              </div>
              {/* Hero Img End */}

              {/* Hero Image Tag Start */}
              <div
                className="export-doctor-box"
                data-aos="fade-up"
                data-aos-duration="2200"
              >
                <div className="icon-box">
                  <figure className="image-anime">
                    <img src={doctorImg} alt="doctorImg" />
                  </figure>
                </div>
                <div className="export-doctor-content">
                  <h3>Dr. Jamie Smith</h3>
                  <p>Physiotherapy</p>
                </div>
              </div>
              {/* Hero Image Tag End */}
            </div>
            {/* Hero Image End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;