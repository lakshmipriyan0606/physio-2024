import React from "react";
import whyUsIcon1 from "../../../assets/images/icon-why-us-1.svg";
import whyUsIcon2 from "../../../assets/images/icon-why-us-2.svg";
import whyUsIcon3 from "../../../assets/images/icon-why-us-3.svg";
import whyUsIcon4 from "../../../assets/images/icon-why-us-4.svg";
import whyUsIcon5 from "../../../assets/images/icon-why-us-5.svg";
import whyUsIcon6 from "../../../assets/images/icon-why-us-6.svg";
import AOS from 'aos';

export const getWhyChooseUsItems = [
  {
    icon:  whyUsIcon1 ,
    title: "Experienced Team",
    description:
      "We understand that injuries and acute pain can unexpectedly occur.",
    delay: "0s",
  },
  {
    icon:  whyUsIcon2 ,
    title: "Patient-Centered Approach",
    description: "We focus on the needs of each individual patient.",
    delay: "0.25s",
  },
  {
    icon:  whyUsIcon3 ,
    title: "Expertise and Experience",
    description: "We have years of expertise in rehabilitation and care.",
    delay: "0.5s",
  },
  {
    icon:  whyUsIcon4 ,
    title: "Advanced Technology",
    description: "We use cutting-edge technology to enhance recovery.",
    delay: "0s",
  },
  {
    icon:  whyUsIcon5 ,
    title: "Convenient and Accessible",
    description: "We offer flexible scheduling and accessible care options.",
    delay: "0.25s",
  },
  {
    icon:  whyUsIcon6 ,
    title: "Community Involvement",
    description: "We are deeply involved in supporting our community.",
    delay: "0.5s",
  },
];

export const WhyChooseUsItem = ({ icon, title, description, delay, index }) => {

  React.useEffect(() => {
    AOS.init({duration:4000})
  }, []);

  const animation = index % 2 === 0 ? "flip-up" : "flip-down";
  return (
    <div
      className={`why-choose-item`}
      data-aos={animation}
      data-aos-duration={index % 2 === 0 ? 1500 : 3000}
      data-aos-delay={index * 300}
    >
      <div className="icon-box">
        <img src={icon} alt="icons" />
      </div>
      <div className="why-choose-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
