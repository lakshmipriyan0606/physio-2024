import { ServiceCtaItem, ServiceItem } from "./ServiceItem";
import serviceIcon1 from "../../../../assets/images/icon-service-1.svg";
import serviceIcon2 from "../../../../assets/images/icon-service-2.svg";
import serviceIcon3 from "../../../../assets/images/icon-service-3.svg";
import serviceIcon4 from "../../../../assets/images/icon-service-4.svg";
import serviceIcon5 from "../../../../assets/images/icon-service-5.svg";
import serviceIcon6 from "../../../../assets/images/icon-service-6.svg";
import serviceIcon7 from "../../../../assets/images/icon-service-7.svg";
import serviceIcon8 from "../../../../assets/images/icon-service-8.svg";
import serviceIconCTA from "../../../../assets/images/icon-cta.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ServiceCard = ({ homePage = true, view = true }) => {
  const serviceData = [
    {
      icon: serviceIcon1,
      title: "manual therapy",
      description:
        "We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.",
      delay: "0.25s",
    },
    {
      icon: serviceIcon2,
      title: "chronic pain",
      description:
        "We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.",
      delay: "0.3s",
    },
    {
      icon: serviceIcon3,
      title: "hand therapy",
      description:
        "We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.",
      delay: "0.35s",
    },
    {
      icon: serviceIcon4,
      title: "sports therapy",
      description:
        "We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.",
      delay: "0.4s",
    },
    {
      icon: serviceIcon5,
      title: "cupping therapy",
      description:
        "We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.",
      delay: "0.45s",
    },
    {
      icon: serviceIconCTA,
      title: "ready to start your journey to recovery?",
      description:
        "We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.",
      ctaText: "Book Appointment",
      delay: "0.55s",
      cta: true,
    },
  ];

  const serviceDataPages = [
    {
      icon: serviceIcon1,
      title: "manual therapy",
      description:
        "We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.",
      delay: "0.25s",
    },
    {
      icon: serviceIcon2,
      title: "chronic pain",
      description:
        "We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.",
      delay: "0.3s",
    },
    {
      icon: serviceIcon3,
      title: "hand therapy",
      description:
        "We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.",
      delay: "0.35s",
    },
    {
      icon: serviceIcon4,
      title: "sports therapy",
      description:
        "We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.",
      delay: "0.4s",
    },
    {
      icon: serviceIcon5,
      title: "cupping therapy",
      description:
        "We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.",
      delay: "0.45s",
    },
    {
      icon: serviceIcon6,
      title: "laser therapy",
      description:
        "We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.",
      delay: "0.5s",
    },
    {
      icon: serviceIcon7,
      title: "laser therapy",
      description:
        "We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.",
      delay: "0.5s",
    },
    {
      icon: serviceIcon8,
      title: "laser therapy",
      description:
        "We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.",
      delay: "0.5s",
    },
    {
      icon: serviceIconCTA,
      title: "ready to start your journey to recovery?",
      description:
        "We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.",
      ctaText: "Book Appointment",
      delay: "0.55s",
      cta: true,
    },
  ];

  const [updateServiceData, setUpdateServiceData] = useState(serviceData);
  console.log("updateServiceData: ", updateServiceData);

  useEffect(() => {
    !homePage && setUpdateServiceData(serviceDataPages);
  }, [homePage]);

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
              {view && (
                <Link to={"services"} className="btn-default">
                  view all services
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Service Row */}
        <div className="row">
          {updateServiceData?.map((service, index) => (
            <div
              className={`${
                service?.cta
                  ? homePage
                    ? "col-lg-9"
                    : "col-lg-12"
                  : "col-lg-3 col-md-6"
              }`}
              key={index}
            >
              {service.cta ? (
                <ServiceCtaItem
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  ctaText={service.ctaText}
                  delay={service.delay}
                />
              ) : (
                <ServiceItem
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={service.delay}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
