import ServiceSingleDetailEntryImg1 from '../../../assets/images/service-entry-img-1.jpg'
import ServiceSingleDetailEntryImg2 from '../../../assets/images/service-entry-img-2.jpg'
import ServiceSingleDetailImg from '../../../assets/images/service-single-img.jpg'
import ctaImg from '../../../assets/images/icon-cta.svg'
import AOS from 'aos';
import React from 'react';

function ServiceSingleDetail() {
  React.useEffect(() => {
    AOS.init({duration:4000})
  }, []);
  return (
    <div className="page-service-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="service-single-content">
              <div className="service-featured-img" data-aos="fade-up" data-aos-duration="1000">
                <figure className="reveal image-anime">
                  <img src={ServiceSingleDetailImg} alt="ServiceSingleDetailImg" />
                </figure>
              </div>

              <div className="service-entry">
                <h3 className="wow fadeInUp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0.2s">
                  Trained Therapists
                </h3>
                <p className="wow fadeInUp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0.4s">
                  Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.
                </p>
                <p className="wow fadeInUp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0.6s">
                  The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac augu ehabitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.
                </p>
                <h3 className="wow fadeInUp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0.8s">
                  Why Corrective Exercise
                </h3>
                <p className="wow fadeInUp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1s">
                  Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.
                </p>

                <ul className="wow fadeInUp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1.2s">
                  <li>Ut Viverra Bibendum Lorem, At Tempus</li>
                  <li>Ut Viverra Bibendum Lorem, At Tempus</li>
                  <li>Ut Viverra Bibendum Lorem, At Tempus</li>
                  <li>Ut Viverra Bibendum Lorem, At Tempus</li>
                  <li>Quis Nostrud Exercitation Ullamco Laboris</li>
                  <li>Quis Nostrud Exercitation Ullamco Laboris</li>
                  <li>Quis Nostrud Exercitation Ullamco Laboris</li>
                  <li>Quis Nostrud Exercitation Ullamco Laboris</li>
                </ul>

                <div className="service-entry-image">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="service-entry-img-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1.4s">
                        <figure className="image-anime reveal">
                          <img src={ServiceSingleDetailEntryImg1} alt="ServiceSingleDetailEntry" />
                        </figure>
                      </div>
                    </div>

                    <div className="col-md-6 col-12">
                      <div className="service-entry-img-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1.6s">
                        <figure className="image-anime reveal">
                          <img src={ServiceSingleDetailEntryImg2} alt="ServiceSingleDetailEntry" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="service-sidebar">
              <div className="service-catagery-list wow fadeInUp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1.8s">
                <h3>Our Services</h3>
                <ul>
                  <li><a href="#">Manual Therapy</a></li>
                  <li><a href="#">Chronic Pain</a></li>
                  <li><a href="#">Hand Therapy</a></li>
                  <li><a href="#">Sports Therapy</a></li>
                  <li><a href="#">Cupping Therapy</a></li>
                </ul>
              </div>

              <div className="opening-hour-section wow fadeInUp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2s">
                <h3>Opening Hours</h3>
                <ul>
                  <li>Mon to Fri : 10:00 to 6:00</li>
                  <li>Sat : 10:00AM To 3:00PM</li>
                  <li>Sun : Closed</li>
                </ul>
              </div>

              <div className="sidebar-cta-box wow fadeInUp" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2.2s">
                <div className="icon-box">
                  <img src={ctaImg} alt="" />
                </div>

                <div className="cta-content">
                  <h3>Ready to Start Your Journey to Recovery?</h3>
                  <p>Contact us today to schedule your initial consultation and take the first step towards a pain-free life.</p>
                </div>

                <div className="cta-appointment-btn">
                  {/* <Link to='book-appointment' className="btn-default">Book Appointment</Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSingleDetail;