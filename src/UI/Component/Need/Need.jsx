import AOS from 'aos';
import needAttentionImg1 from '../../../assets/images/icon-need-attention-1.svg'
import needAttentionImg2 from '../../../assets/images/icon-need-attention-2.svg'
import needAttentionImg3 from '../../../assets/images/icon-need-attention-3.svg'
import needAttentionImg4 from '../../../assets/images/icon-need-attention-4.svg'
import needAttentionImg5 from '../../../assets/images/icon-need-attention-5.svg'
import needAttentionImg6 from '../../../assets/images/icon-need-attention-6.svg'
import needAttentionImg7 from '../../../assets/images/icon-need-attention-7.svg'
import needAttentionImg8 from '../../../assets/images/icon-need-attention-8.svg'
import needAttentionImg9 from '../../../assets/images/icon-need-attention-9.svg'
import React from 'react';

const needData = [
    { src: needAttentionImg1, alt: 'neck pain', label: 'neck pain' },
    { src: needAttentionImg2, alt: 'shoulder pain', label: 'shoulder pain' },
    { src: needAttentionImg3, alt: 'hip pain', label: 'hip pain' },
    { src: needAttentionImg4, alt: 'knee pain', label: 'knee pain' },
    { src: needAttentionImg5, alt: 'elbow pain', label: 'elbow pain' },
    { src: needAttentionImg6, alt: 'tricep pain', label: 'tricep pain' },
    { src: needAttentionImg7, alt: 'hand pain', label: 'hand pain' },
    { src: needAttentionImg8, alt: 'foot pain', label: 'foot pain' },
    { src: needAttentionImg9, alt: 'ankle pain', label: 'ankle pain' },
]


const NeedAttention = () => {
    React.useEffect(() => {
        AOS.init({duration:4000})
      }, []);
  return (
    <div className="need-attention parallaxie">
      <div className="container">
        <div className="row section-row">
          {/* Section Title Start */}
          <div className="section-title">
            <h3 data-aos="flip-up" data-aos-duration="1000">need attention</h3>
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              Where Do You Need Attention?
            </h2>
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="250">
              We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy services are designed to provide prompt and effective care to help you manage.
            </p>
          </div>
          {/* Section Title End */}
        </div>

        <div className="row">
          {needData.map((item, index) => (
            <div className="col-lg-4 col-md-4 col-6" key={index}>
              {/* Need Attention List Start */}
              <div
                className="need-attention-list wow fadeInUp"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="3000"
                data-aos-delay={`${0.25 * Math.floor(index / 3)}s`}
              >
                {/* Icon Box Start */}
                <div className="icon-box">
                  <img src={item.src} alt={item.alt} />
                </div>
                {/* Icon Box End */}

                {/* Need Attention Content Start */}
                <div className="need-attention-content">
                  <p>{item.label}</p>
                </div>
                {/* Need Attention Content End */}
              </div>
              {/* Need Attention List End */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NeedAttention;