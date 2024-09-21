import { SectionTitle } from "../../Blog/OtherComponent";
import OurMVAItem from "./OurMVAItem";
import CallToAction from "./CallToAction";
import missionImg from "../../../../assets/images/icon-our-mission.svg";
import visionImg from "../../../../assets/images/icon-our-vision.svg";
import approchImg from "../../../../assets/images/icon-our-approch.svg";

const MissionVision = () => {
  const items = [
    {
      iconSrc: missionImg,
      title: "Our Mission",
      description:
        "We understand that injuries and acute pain can unexpectedly. Our emergency that injuries and acute pain can unexpectedly. Our emergency physiotherapy.derstand that injuries and acute pain can unexpectedly.",
    },
    {
      iconSrc: visionImg,
      title: "Our Vision",
      description:
        "We understand that injuries and acute pain can unexpectedly. Our emergency that injuries and acute pain can unexpectedly. Our emergency physiotherapy.derstand that injuries and acute pain can unexpectedly.",
      delay: 0.25,
    },
    {
      iconSrc: approchImg,
      title: "Our Approach",
      description:
        "We understand that injuries and acute pain can unexpectedly. Our emergency that injuries and acute pain can unexpectedly. Our emergency physiotherapy.derstand that injuries and acute pain can unexpectedly.",
      delay: 0.5,
    },
  ];

  return (
    <div className="mission-vision">
      <div className="container">
        <div className="row section-row">
          <SectionTitle
            title={"vision to victory"}
            descriptionRight={"Quality Leader"}
            descriptionLeft={`We're a Recognized`}
          />
        </div>
        <div className="row">
          {items.map((item, index) => (
            <OurMVAItem
              key={index}
              iconSrc={item.iconSrc}
              title={item.title}
              description={item.description}
              delay={item.delay}
            />
          ))}
        </div>
        ;
        <CallToAction />
      </div>
    </div>
  );
};

export default MissionVision;
