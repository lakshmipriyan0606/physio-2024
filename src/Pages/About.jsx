import React from "react";
import PageHeader from "../UI/Component/404/PageHeader";
import AboutContent from "../UI/Component/About/AboutContent";
import CampanyCounter from "../UI/Component/About/Counter/Counter";
import MissionVision from "../UI/Component/About/Vision/MissionVision";
import Solution from "../UI/Component/Solution/Solution";
import TherapyProcess from "../UI/Component/About/TherapyProcess/TherapyProcess";
import ClientTestimonial from "../UI/Component/Testimonial/ClientTestimonial";
import OurTeam from "../UI/Component/OurTeam/OurTeam";

const AboutPages = () => {
  return (
    <div>
      <PageHeader title={'About us'} />
      <AboutContent book={false} />
      <CampanyCounter/>
      <MissionVision/>
      <Solution isCounter={false}/>
      <TherapyProcess/>
      <ClientTestimonial/>
      <OurTeam/>
    </div>
  );
};

export default AboutPages;
