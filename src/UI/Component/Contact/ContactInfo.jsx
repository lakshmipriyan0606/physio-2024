
const ContactInfo = ({ icon, title, details }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="contact-info-item wow fadeInUp">
        <div className="icon-box">
          <img src={icon} alt={`${title} icon`} />
        </div>
        <div className="contact-info-content">
          <h3>{title}</h3>
          {details.map((detail, index) => (
            <p key={index}>{detail}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
