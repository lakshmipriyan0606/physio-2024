import { ServiceCtaItem, ServiceItem } from "./ServiceItem";
import  serviceIcon1 from '../../../assets/images/icon-service-1.svg'
import  serviceIcon2 from '../../../assets/images/icon-service-2.svg'
import  serviceIcon3 from '../../../assets/images/icon-service-3.svg'
import  serviceIcon4 from '../../../assets/images/icon-service-4.svg'
import  serviceIcon5 from '../../../assets/images/icon-service-5.svg'
import  serviceIcon6 from '../../../assets/images/icon-service-6.svg'
import  serviceIconCTA from '../../../assets/images/icon-cta.svg'

  export const TherapistTeam = () => {
    return (
      <div className="our-service">
        <div className="container">
          <div className="row align-items-center section-row">
            {/* Column 1 */}
            <div className="col-lg-7">
              {/* Section Title */}
              <div className="section-title">
                <h3 className="wow fadeInUp">theraphist team</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  <span>We Provide</span> The Best Services
                </h2>
              </div>
            </div>
  
            {/* Column 2 */}
            <div className="col-lg-5">
              {/* Section Button */}
              <div className="section-btn wow fadeInUp" data-wow-delay="0.25s">
                <a href="#" className="btn-default">
                  view all services
                </a>
              </div>
            </div>
          </div>
  
          {/* Service Row */}
          <div className="row">
            {/* Service Item 1 */}
            <div className="col-lg-3 col-md-6">
              <ServiceItem
                icon={serviceIcon1}
                title="manual therapy"
                description="We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy."
                delay="0.25s"
              />
            </div>
  
            {/* Service Item 2 */}
            <div className="col-lg-3 col-md-6">
              <ServiceItem
                icon={serviceIcon2}
                title="chronic pain"
                description="We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy."
                delay="0.3s"
              />
            </div>
  
            {/* Service Item 3 */}
            <div className="col-lg-3 col-md-6">
              <ServiceItem
                icon={serviceIcon3}
                title="hand therapy"
                description="We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy."
                delay="0.35s"
              />
            </div>
  
            {/* Service Item 4 */}
            <div className="col-lg-3 col-md-6">
              <ServiceItem
                icon={serviceIcon4}
                title="sports therapy"
                description="We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy."
                delay="0.4s"
              />
            </div>
  
            {/* Service Item 5 */}
            <div className="col-lg-3 col-md-6">
              <ServiceItem
                icon={serviceIcon5}
                title="cupping therapy"
                description="We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy."
                delay="0.45s"
              />
            </div>
  
            {/* Service Item 6 */}
            <div className="col-lg-3 col-md-6">
              <ServiceItem
                icon={serviceIcon6}
                title="laser therapy"
                description="We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy."
                delay="0.5s"
              />
            </div>
  
            {/* Service Item 7 */}
            <div className="col-lg-6">
              <ServiceCtaItem
                icon={serviceIconCTA}
                title="ready to start your journey to recovery?"
                description="We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy."
                ctaText="Book Appointment"
                delay="0.55s"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };