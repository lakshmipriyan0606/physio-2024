import React from "react";
import Home from "../UI/Component/Home.jsx";
import AboutUs from "../UI/Component/About/About.jsx";
import Service from "../UI/Component/Service/Service.jsx";
import Solution from "../UI/Component/Solution/Solution.jsx";
import WhyChooseUs from "../UI/Component/WhyUs/WhyUs.jsx";
import NeedAttention from "../UI/Component/Need/Need.jsx";
import OurTeam from "../UI/Component/OurTeam/OurTeam.jsx";
import ClientTestimonial from "../UI/Component/Testimonial/ClientTestimonial.jsx";
import BlogSection from "../UI/Component/Blog/Blog.jsx";

const HomePages = () => {

  React.useEffect(()=>{
      window.scrollTo(0,0)
  },[])

  return (
    <div>
      <Home />
      <AboutUs />
      <Service  HomePages={true} view={true}/>
      <Solution />
      <WhyChooseUs />
      <NeedAttention />
      <OurTeam />
      <ClientTestimonial/>
      <BlogSection/>
    </div>
  );
};

export default HomePages;
