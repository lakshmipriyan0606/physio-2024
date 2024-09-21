import { getWhyChooseUsItems, WhyChooseUsItem } from "./WhyChooseItem";

import whyUsMainImg from '../../../assets/images/why-us-img.png'
  

const WhyChooseUs = () => {
  
  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row section-row">
          <div className="section-title">
            <h3 data-aos="flip-up" data-aos-duration="1000">why us</h3>
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              <span>Excellence In</span> Care And Rehabilitation
            </h2>
          </div>
        </div>

        <div className="why-choose-us-box">
          <div className="row no-gutters align-items-center">
            <div className="col-lg-6">
              <div className="why-choose-box-1">
                {getWhyChooseUsItems.slice(0, 3).map((item, index) => (
                  <WhyChooseUsItem
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    delay={item.delay}
                    index={index}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-choose-box-2">
                {getWhyChooseUsItems.slice(3, 6).map((item, index) => (
                  <WhyChooseUsItem
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    delay={item.delay}
                    index={index + 3}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="why-choose-image">
                <img src={whyUsMainImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;