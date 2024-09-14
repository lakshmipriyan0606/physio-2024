import React from 'react';
import TestimonialSlider from './TestimonialSlider';

const ClientTestimonial = () => {
  return (
    <div className="our-testimonial parallaxie">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="wow fadeInUp">review</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                <span>What</span> Our Client Say
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;