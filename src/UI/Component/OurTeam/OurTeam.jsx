import AOS from 'aos';
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import teamImg1 from "../../../assets/images/team-1.jpg";
import teamImg2 from "../../../assets/images/team-2.jpg";
import teamImg3 from "../../../assets/images/team-3.jpg";
import teamImg4 from "../../../assets/images/team-4.jpg";
import React from 'react';

function OurTeam() {
  React.useEffect(() => {
    AOS.init({duration:4000})
  }, []);
  const teamMembers = [
    { name: "dr. emily brown", role: "senior physiotherapist", img: teamImg1 },
    { name: "dr. lisa johnson", role: "pediatric therapist", img: teamImg2 },
    {
      name: "dr. jessica wilson",
      role: "neurological therapist",
      img: teamImg3,
    },
    { name: "dr. linda thomas", role: "orthopedic therapist", img: teamImg4 },
  ];

  return (
    <div className="our-team">
      <div className="container">
        <div className="row align-items-center section-row">
          <div className="col-lg-9">
            <div className="section-title">
              <h3 data-aos="flip-up" data-aos-duration="3000">Therapist Team</h3>
              <h2>
                <span>Our Dedicated</span> & Experienced Therapist Team
              </h2>
            </div>
          </div>
           {/* <div className="col-lg-3">
            <div className="section-btn">
              <a href="#" className="btn-default">
                View All Team
              </a>
            </div> 
          </div> */}
        </div>

        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div
                className="team-member-item"
                data-aos="zoom-in"
                data-aos-duration="3000"
                data-aos-delay={`${0.25 * index}s`}
              >
                <div className="team-image">
                  <figure className="image-anime">
                    <img src={member.img} alt={member.name} />
                  </figure>
                  <div className="team-social-icon">
                    <ul>
                      <li>
                        <a href="#" className="social-icon">
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-icon">
                          <FaYoutube />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-icon">
                          <FaInstagram />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-icon">
                          <FaTwitter />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;