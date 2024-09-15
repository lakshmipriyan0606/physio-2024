
const OurMVAItem = ({ iconSrc, title, description, delay }) => {
  return (
    <div className="col-lg-4 col-md-6">
    <div className="our-mva-item wow fadeInUp" data-wow-delay={delay}>
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