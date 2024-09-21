import AOS from "aos";
import React from "react";

const OurMVAItem = ({ iconSrc, title, description, key }) => {
  React.useEffect(() => {
    AOS.init({ duration: 4000 });
  }, []);
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="our-mva-item"
        data-aos={key % 2 === 0 ? "fade-right" : "fade-left"}
        data-aos-duration="3000"
        data-aos-delay={`${0.25 * Math.floor(key / 3)}s`}
      >
        <div className="icon-box">
          <img src={iconSrc} alt="" />
        </div>

        <div className="mva-item-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OurMVAItem;
