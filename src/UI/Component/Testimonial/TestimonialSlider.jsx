import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Correct import path
import Testimonial from "./Testimonal";
import "swiper/css";
import "swiper/css/pagination";
import authorImg1 from "../../../assets/images/author-1.jpg";
import authorImg2 from "../../../assets/images/author-2.jpg";
import authorImg3 from "../../../assets/images/author-3.jpg";
import authorImg4 from "../../../assets/images/author-4.jpg";
const testimonials = [
  {
    rating: [1, 2, 3, 4, 5],
    content:
      "We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy services are designed to provide prompt.",
    author: { name: "Johan Duo", occupation: "Professional Athlete" },
    image: authorImg1,
  },
  {
    rating: [1, 2, 3, 4, 5],
    content:
      "We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy services are designed to provide prompt.",
    author: { name: "Jane Smith", occupation: "Retired Teacher" },
    image: authorImg2,
  },
  {
    rating: [1, 2, 3, 4, 5],
    content:
      "We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy services are designed to provide prompt.",
    author: { name: "Robert Lee", occupation: "Construction Worker" },
    image: authorImg3,
  },
  {
    rating: [1, 2, 3, 4, 5],
    content:
      "We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy services are designed to provide prompt.",
    author: { name: "Banson Doe", occupation: "Marathon Runner" },
    image: authorImg4,
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={true}
      spaceBetween={30}
      className="testimonial-slider"
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <Testimonial {...testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
