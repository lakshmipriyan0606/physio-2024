import React from "react";
import PageHeader from "../UI/Component/404/PageHeader";
import Service from "../UI/Component/Service/Service";
import Testimonial from "../UI/Component/Testimonial/Testimonal";
import WhyChooseUs from "../UI/Component/WhyUs/WhyUs";
import ClientTestimonial from "../UI/Component/Testimonial/ClientTestimonial";

const ServicesPage = () => {
  return (
    <div>
      <PageHeader title={'Services'} />
      <Service homePage={false} view={false} />
      <ClientTestimonial />
      <WhyChooseUs />
    </div>
  );
};

export default ServicesPage;
