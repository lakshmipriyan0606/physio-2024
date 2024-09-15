import { FaArrowRight } from 'react-icons/fa';

export const ServiceItem = ({ icon, title, description, delay }) => {
  return (
    <div className="service-item wow fadeInUp" data-wow-delay={delay}>
      {/* Icon Box */}
      <div className="icon-box">
        <img src={icon} alt="" />
      </div>

      {/* Service Body */}
      <div className="service-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {/* Service Footer */}
      <div className="service-footer">
        <a href="#" className="service-btn">
          <FaArrowRight className='text-white'/>
        </a>
      </div>
    </div>
  );
};

export const ServiceCtaItem = ({
  icon,
  title,
  description,
  ctaText,
  delay,
}) => {
  return (
    <div
      className="service-item service-cta-item wow fadeInUp"
      data-wow-delay={delay}
    >
      {/* Icon Box */}
      <div className="icon-box">
        <img src={icon} alt="" />
      </div>

      {/* Service Body */}
      <div className="service-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {/* Service Footer */}
      <div className="service-cta-btn">
        <a href="#" className="btn-default">
          {ctaText}
        </a>
      </div>
    </div>
  );
}
