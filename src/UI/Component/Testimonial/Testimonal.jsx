import React from 'react';

const Testimonial = ({ rating, content, author, image }) => {
  return (
    <div className="testimonial-item">
      <div className="testimonial-header">
        <div className="testimonial-rating">
          {rating.map((star, index) => (
            <i key={index} className="fa-solid fa-star" />
          ))}
        </div>
        <div className="testimonial-content">
          <p>{content}</p>
        </div>
      </div>
      <div className="testimonial-body">
        <div className="author-image">
          <figure className="image-anime">
            <img src={image} alt="" />
          </figure>
        </div>
        <div className="author-content">
          <h3>{author.name}</h3>
          <p>{author.occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;