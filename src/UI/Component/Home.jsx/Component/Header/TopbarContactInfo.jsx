import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const TopbarContactInfo = () => {
  return (
    <div className="">
      <ul className="topbar d-flex justify-content-around align-items-center gap-4 p-lg-2 p-1 px-4">
        <li className="text-white">
          <a href="#">
            <FaPhone />
            <span> +(123) 698-5245</span>
          </a>
        </li>
        <li className="text-white">
          <a href="#">
            <FaEnvelope />
            <span>info@domain.com</span>
          </a>
        </li>
        <li className="hide-mobile">
          <a href="#">
            <FaMapMarkerAlt />
           <span> 24/11 Robert Road, New York, USA</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopbarContactInfo;
