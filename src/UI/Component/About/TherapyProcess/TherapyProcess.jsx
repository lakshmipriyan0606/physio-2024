import theraphyImg1 from '../../../../assets/images/therapy-process-1.jpg'
import theraphyImg2 from '../../../../assets/images/therapy-process-2.jpg'
import theraphyImg3 from '../../../../assets/images/therapy-process-3.jpg'
import theraphyImg4 from '../../../../assets/images/therapy-process-4.jpg'
const TherapyProcess = () => {
  return (
    <div className="therapy-process">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">therapy process</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                <span>What</span> is Therapy Process
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            {/* Therapy Process Item Start */}
            <div className="therapy-process-item wow fadeInUp">
              {/* Icon Box Start */}
              <div className="icon-box">
                <figure className="image-anime">
                  <img src={theraphyImg1} alt="Therapy Process 1" />
                </figure>
              </div>
              {/* Icon Box End */}

              {/* Therapy Process Content Start */}
              <div className="therapy-process-content">
                <h3>get paired with a therapist</h3>
                <p>We understand that injuries and acute pain can happen unexpectedly.</p>
              </div>
              {/* Therapy Process Content End */}
            </div>
            {/* Therapy Process Item End */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* Therapy Process Item Start */}
            <div className="therapy-process-item wow fadeInUp" data-wow-delay="0.25s">
              {/* Icon Box Start */}
              <div className="icon-box">
                <figure className="image-anime">
                  <img src={theraphyImg2} alt="Therapy Process 2" />
                </figure>
              </div>
              {/* Icon Box End */}

              {/* Therapy Process Content Start */}
              <div className="therapy-process-content">
                <h3>choose your preferred way to receive care</h3>
                <p>We understand that injuries and acute pain can happen unexpectedly.</p>
              </div>
              {/* Therapy Process Content End */}
            </div>
            {/* Therapy Process Item End */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* Therapy Process Item Start */}
            <div className="therapy-process-item wow fadeInUp" data-wow-delay="0.5s">
              {/* Icon Box Start */}
              <div className="icon-box">
                <figure className="image-anime">
                  <img src={theraphyImg3} alt="Therapy Process 3" />
                </figure>
              </div>
              {/* Icon Box End */}

              {/* Therapy Process Content Start */}
              <div className="therapy-process-content">
                <h3>we help you get better, faster!</h3>
                <p>We understand that injuries and acute pain can happen unexpectedly.</p>
              </div>
              {/* Therapy Process Content End */}
            </div>
            {/* Therapy Process Item End */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* Therapy Process Item Start */}
            <div className="therapy-process-item wow fadeInUp" data-wow-delay="0.75s">
              {/* Icon Box Start */}
              <div className="icon-box">
                <figure className="image-anime">
                  <img src={theraphyImg4} alt="Therapy Process 4" />
                </figure>
              </div>
              {/* Icon Box End */}

              {/* Therapy Process Content Start */}
              <div className="therapy-process-content">
                <h3>what psychotherapy can help with</h3>
                <p>We understand that injuries and acute pain can happen unexpectedly.</p>
              </div>
              {/* Therapy Process Content End */}
            </div>
            {/* Therapy Process Item End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyProcess;
