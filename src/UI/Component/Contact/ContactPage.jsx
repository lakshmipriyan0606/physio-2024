import AOS from 'aos';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import GoogleMap from './GoogleMap';
import contactusImg from '../../../assets/images/contact-us-img.jpg'
import greenLocation from '../../../assets/images/icon-green-location.svg'
import greenMail from '../../../assets/images/icon-green-mail.svg'
import greenPhone from '../../../assets/images/icon-green-phone.svg'
import greenHour from '../../../assets/images/icon-green-hour.svg'
import React from 'react';

const ContactSinglePage = () => {

  React.useEffect(() => {
    AOS.init({ duration: 4000 });
  }, []);

  const contactInfos = [
    {
      icon: greenLocation,
      title: 'location',
      details: ['24/11 Robert Road , New York , USA'],
    },
    {
      icon: greenMail,
      title: 'email',
      details: ['info@domainname.com', 'sales@domainname.com'],
    },
    {
      icon: greenPhone,
      title: 'phone',
      details: ['(+01) 789 854 856', '(+02) 895 867 781'],
    },
    {
      icon: greenHour,
      title: 'working hours',
      details: ['Mon to Fri : 10:00 To 6:00', 'Sat : 10:00AM To 3:00PM'],
    },
  ];

  return (
    <div>
      <div className="page-contact" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <div className="row">
            {contactInfos.map((info, index) => (
              <ContactInfo key={index} icon={info.icon} title={info.title} details={info.details} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 200} />
            ))}
          </div>
        </div>
      </div>

      <div className="contact-us-form" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-us-img" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                <figure className="reveal image-anime">
                  <img src={contactusImg} alt="contactusImg" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <ContactForm data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200" />
            </div>
          </div>
        </div>
      </div>

      <div className="google-map" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSinglePage;