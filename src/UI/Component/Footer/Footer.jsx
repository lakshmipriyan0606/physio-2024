import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import footerLogo from  '../../../assets/images/footer-logo.svg'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            {/* About Footer Start */}
            <div className="about-footer">
              {/* Footer Logo Start */}
              <div className="footer-logo">
                <img src={footerLogo} alt="" />
              </div>
              {/* Footer Logo End */}

              {/* About Footer Content Start */}
              <div className="about-footer-content">
                <p>We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy.</p>
              </div>
              {/* Footer Social Links Start */}
              <div className="footer-social-links">
                <ul>
                  <li><a href="#"><FaFacebookF /></a></li>
                  <li><a href="#"><FaTwitter /></a></li>
                  <li><a href="#"><FaLinkedinIn /></a></li>
                  <li><a href="#"><FaInstagram /></a></li>
                </ul>
              </div>
              {/* Footer Social Links End */}
            </div>
            {/* About Footer End */}
          </div>

          <div className="col-lg-3 col-md-4">
            {/* About Working Hours Start */}
            <div className="about-working-hour">
              <h3>working hours</h3>
              <ul>
                <li>mon to fri : 10:00 to 6:00</li>
                <li>sat : 10:00AM to 3:00PM</li>
                <li>sun : closed</li>
              </ul>
            </div>
            {/* About Working Hours End */}
          </div>

          <div className="col-lg-3 col-md-4">
            {/* About Services List Start */}
            <div className="about-service-list">
              <h3>more services</h3>
              <ul>
                <li><a href="#">manual therapy</a></li>
                <li><a href="#">chronic pain</a></li>
                <li><a href="#">hand therapy</a></li>
              </ul>
            </div>
            {/* About Services List End */}
          </div>

          <div className="col-lg-3 col-md-4">
            {/* Footer Contact Start */}
            <div className="footer-contact">
              <h3>contact</h3>
              {/* Footer Contact Details Start */}
              <div className="footer-contact-details">
                {/* Footer Info Box Start */}
                <div className="footer-info-box">
                  <div className="icon-box">
                    <MdPhone className='text-white p-3' />
                  </div>
                  <div className="footer-info-box-content">
                    <p>(+0) 789 3456 012</p>
                  </div>
                </div>
                {/* Footer Info Box End */}

                {/* Footer Info Box Start */}
                <div className="footer-info-box">
                  <div className="icon-box">
                    <MdEmail className='text-white p-3' />
                  </div>
                  <div className="footer-info-box-content">
                    <p>domain@gmail.com</p>
                  </div>
                </div>
                {/* Footer Info Box End */}

                {/* Footer Info Box Start */}
                <div className="footer-info-box">
                  <div className="icon-box">
                    <MdLocationOn  className='text-white p-3'/>
                  </div>
                  <div className="footer-info-box-content">
                    <p>24/11 Robert Road, New York, USA</p>
                  </div>
                </div>
                {/* Footer Info Box End */}
              </div>
              {/* Footer Contact Details End */}
            </div>
            {/* Footer Contact End */}
          </div>
        </div>

        {/* Footer Copyright Section Start */}
        <div className="footer-copyright">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              {/* Footer Copyright Start */}
              <div className="footer-copyright-text">
                <p>Copyright 2024 Physiocare. All Rights Reserved.</p>
              </div>
              {/* Footer Copyright End */}
            </div>

            <div className="col-lg-6 col-md-6">
              {/* Footer Links Start */}
              <div className="footer-links">
                <ul>
                  <li><Link to={'about'}>about us</Link></li>
                  <li><Link to={'services'}>services</Link></li>
                  <li><Link to={'contact'}>contact us</Link></li>
                </ul>
              </div>
              {/* Footer Links End */}
            </div>
          </div>
        </div>
        {/* Footer Copyright Section End */}
      </div>
    </footer>
  );
}

export default Footer;
