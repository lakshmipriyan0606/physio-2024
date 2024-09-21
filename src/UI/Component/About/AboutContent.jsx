import React from "react";
import AOS from "aos";
import aboutImg from "../../../assets/images/about-img.jpg";
import experienceIcon from "../../../assets/images/icon-experience.svg";
import aboutIcon1 from "../../../assets/images/icon-about-us-1.svg";
import aboutIcon2 from "../../../assets/images/icon-about-us-2.svg";
import aboutIcon3 from "../../../assets/images/icon-about-us-3.svg";
import aboutIcon4 from "../../../assets/images/icon-about-us-4.svg";
import { Link } from "react-router-dom";

const AboutContent = ({ book = true }) => {
  React.useEffect(() => {
    AOS.init({ duration: 4000 });
  }, []);

  return (
    <div className="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* About Image Start */}
            <div
              className="about-us-image"
              data-aos="fade-right"
              data-aos-duration="2200"
            >
              <div className="about-img">
                <figure className="reveal image-anime">
                  <img src={aboutImg} alt="aboutImg" />
                </figure>

                {/* Company Experience Box Start */}
                <div
                  className="company-experience"
                  data-aos="fade-up"
                  data-aos-duration="2200"
                >
                  <div className="icon-box">
                    <img src={experienceIcon} alt="experienceIcon" />
                  </div>
                  <div className="company-experience-content">
                    <h3>
                      <span className="counter">15</span>+
                    </h3>
                    <p>years of experience</p>
                  </div>
                </div>
                {/* Company Experience Box End */}
              </div>
            </div>
            {/* About Image End */}
          </div>
          <div className="col-lg-6">
            {/* About Us Content Start */}
            <div className="about-content">
              {/* Section Title Start */}
              <div
                className="section-title"
                data-aos="fade-down"
                data-aos-duration="2200"
              >
                <h3 className="wow fadeInUp">about us</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  We Are The Best For <span>Physiotherapy</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.25s">
                  We understand that injuries and acute pain can happen
                  unexpectedly. Our emergency physiotherapy services are
                  designed to provide prompt and effective care to help you
                  manage pain, prevent further injury, and start your recovery
                  process as quickly as possible.
                </p>
              </div>
              {/* Section Title End */}

              {/* About Us Body Start */}
              <div className="about-us-body">
                {/* About List Item Start */}
                <div
                  className="about-list-item"
                  data-aos="fade-up"
                  data-aos-delay="0.5s"
                  data-aos-duration="2200"
                >
                  <div className="icon-box">
                    <img src={aboutIcon1} alt="aboutIcon1" />
                  </div>
                  <div className="about-list-content">
                    <h3>nutrition strategies</h3>
                  </div>
                </div>
                {/* About List Item End */}

                {/* About List Item Start */}
                <div
                  className="about-list-item"
                  data-aos="fade-up"
                  data-aos-delay="0.5s"
                  data-aos-duration="2200"
                >
                  <div className="icon-box">
                    <img src={aboutIcon2} alt="aboutIcon2" />
                  </div>
                  <div className="about-list-content">
                    <h3>be pro active</h3>
                  </div>
                </div>
                {/* About List Item End */}

                {/* About List Item Start */}
                <div
                  className="about-list-item"
                  data-aos="fade-up"
                  data-aos-duration="2200"
                  data-aos-delay="0.75s"
                >
                  <div className="icon-box">
                    <img src={aboutIcon3} alt="aboutIcon3" />
                  </div>
                  <div className="about-list-content">
                    <h3>workout routines</h3>
                  </div>
                </div>
                {/* About List Item End */}

                {/* About List Item Start */}
                <div
                  className="about-list-item"
                  data-aos="fade-up"
                  data-aos-delay="0.75s"
                  data-aos-duration="2200"
                >
                  <div className="icon-box">
                    <img src={aboutIcon4} alt="aboutIcon4" />
                  </div>
                  <div className="about-list-content">
                    <h3>support & motivation</h3>
                  </div>
                </div>
                {/* About List Item End */}
              </div>
              {/* About Us Body End */}

              {/* About Us Footer Start */}
              <div className="about-us-footer">
                {/* Doctor Info Start */}
                <div
                  className="doctor-info"
                  data-aos="fade-up"
                  data-aos-delay="1s"
                  data-aos-duration="2200"
                >
                  <div className="doctor-info-item">
                    <div className="image-box">
                      <figure className="image-anime">
                        <img src="images/about-doctor-img.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="doctor-info-content">
                      <h3>dr. jamie smith</h3>
                      <p>Physiotherapy</p>
                    </div>
                  </div>
                </div>
                {/* Doctor Info End */}

                {/* Appointment Button Start */}
                {book && (
                  <div
                    className="appointment-btn"
                    data-aos="fade-up"
                    data-aos-delay="1s"
                    data-aos-duration="2200"
                  >
                    <Link to="book-appointment" className="btn-default">
                      Make an appointment
                    </Link>
                  </div>
                )}
                {/* Appointment Button End */}
              </div>
              {/* About Us Footer End */}
            </div>
            {/* About Us Content End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
