import sparkIcon from '../../../assets/images/icon-sparkles.svg'

const messages = [
  "Emergency No. : (+01) 789 856 258",
  "For any additional inquiries : info@domainname.com",
  "Book Appointment: (+01) 879 526 789",
  "Working Hours: Mon to Fri : 10:00 To 6:00"
];

const ScrollingTicker = () => {
  return (
    <div className="our-scrolling-ticker">
      <div className="scrolling-ticker-box">
        <div className="scrolling-content">
          {messages.map((message, index) => (
            <span key={index}>
              <img src={sparkIcon} alt="sparkIcon" />
              {message}
            </span>
          ))}
        </div>
        <div className="scrolling-content">
          {messages.map((message, index) => (
            <span key={index}>
              <img src={sparkIcon} alt="sparkIcon" />
              {message}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingTicker;
