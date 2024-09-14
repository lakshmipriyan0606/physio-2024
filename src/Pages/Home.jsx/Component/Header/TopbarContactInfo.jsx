import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const TopbarContactInfo = () => {
  return (
    <div className="topbar-contact-info">
      <ul>
        <li>
          <a href="#">
            <FaPhone />
            +(123) 698-5245
          </a>
        </li>
        <li>
          <a href="#">
            <FaEnvelope />
            info@domain.com
          </a>
        </li>
        <li className="hide-mobile">
          <a href="#">
            <FaMapMarkerAlt />
            24/11 Robert Road, New York, USA
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopbarContactInfo;