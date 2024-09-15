

import ctaImg from '../../../../assets/images/icon-cta.svg'

const CallToAction = () => {
  return (
    <div className="cta-infobar wow fadeInUp" data-wow-delay="0.75s">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="cta-info-content">
            <div className="icon-box">
              <img src={ctaImg} alt="" />
            </div>

            <div className="cta-content">
              <h3>Ready to start your journey to recovery?</h3>
              <p>Contact us today to schedule your initial consultation and take the first step towards a pain-free life.</p>
            </div>
          </div>
        </div>

        {/* <div className="col-lg-6">
          <div className="cta-appointment-btn">
            <a href="#" className="btn-default">
              Book Appointment
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CallToAction;