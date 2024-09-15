import React from "react";
import gallery1 from "../../../../assets/images/gallery-1.jpg";
import gallery2 from "../../../../assets/images/gallery-2.jpg";
import gallery3 from "../../../../assets/images/gallery-3.jpg";
import gallery4 from "../../../../assets/images/gallery-4.jpg";
import gallery5 from "../../../../assets/images/gallery-5.jpg";
import gallery6 from "../../../../assets/images/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "gallery1" },
  { src: gallery2, alt: "gallery2" },
  { src: gallery3, alt: "gallery3" },
  { src: gallery4, alt: "gallery4" },
  { src: gallery5, alt: "gallery5" },
  { src: gallery6, alt: "gallery6" },
];

const GalleryImages = () => {
  return (
    <div className="gallery-scrolling-content">
      {images.map((image, index) => (
        <div key={index} className="gallery-image">
          <figure className="image-anime">
            <img src={image.src} alt={image.alt} />
          </figure>
        </div>
      ))}
    </div>
  );
};

function GalleryCarousel() {
  return (
    <div className="gallery-carousel">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            {/* Scrolling Content Start */}
            <div className="gallery-carousel-box">
              <GalleryImages />
              <GalleryImages />
            </div>

            {/* Scrolling Content End */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryCarousel;
