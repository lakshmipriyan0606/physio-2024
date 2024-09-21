import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const ServiceItem = ({ icon, title, description, delay, index }) => {
  const animation = index % 2 === 0 ? "fade-right" : "zoom-in";
  return (
    <div className="service-item" data-aos={animation} data-aos-duration={index % 2 === 0 ? 2000 : 3000} data-aos-delay={delay}>
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
          <Link to={'/our-detail'}> <FaArrowRight className='text-white'/></Link>
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
  index,
}) => {
  const animation = index % 2 === 0 ? "fade-right" : "zoom-in";
  return (
    <div
      className="service-item service-cta-item"
      data-aos={animation} data-aos-duration={index % 2 === 0 ? 2000 : 2800} data-aos-delay={delay}
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
        <Link to='book-appointment' className="btn-default">
          {ctaText}
        </Link>
      </div>
    </div>
  );
}