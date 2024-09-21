import AOS from 'aos';

const SolutionPlanContent = () => {
  return (
    <div className="solution-plan-content">
      <div className="section-title">
        <h3 data-aos="flip-up" data-aos-duration="1000">solution to your plan</h3>
        <h2 className="text-anime-style-2" data-cursor="-opaque">
          <span>We Proudly</span> Give Quality Treatment
        </h2>
        <p data-aos="slide-up" data-aos-duration="1200" data-aos-delay="250">
          We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy services are designed to provide prompt and effective care to help you manage.
        </p>
      </div>
      <div className="solution-plan-body" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500">
        <ul>
          <li>We understand that injuries.</li>
          <li>can happen unexpectedly Our emergency.</li>
          <li>We understand that injuries.</li>
        </ul>
      </div>
    </div>
  );
};

export default SolutionPlanContent;