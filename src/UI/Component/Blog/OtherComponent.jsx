const BlogItem = ({ imageSrc, title, delay = 0 }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="blog-item wow fadeInUp" data-wow-delay={delay}>
        <div className="post-featured-image" data-cursor-text="View">
          <figure>
            <a href="#" className="image-anime">
              <img src={imageSrc} alt="" />
            </a>
          </figure>
        </div>
        <div className="post-item-content">
          <div className="post-item-body">
            <h2>
              <a href="#">{title}</a>
            </h2>
          </div>
          <div className="post-item-footer">
            <a href="#" className="readmore-btn">
              read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;

export const SectionTitle = ({ title, descriptionLeft, descriptionRight }) => {
  return (
    <div className="section-title">
      <h3 className="wow fadeInUp">{title}</h3>
      <h2 className="text-anime-style-2" data-cursor="-opaque">
        <span>{descriptionLeft}</span> {descriptionRight}
      </h2>
    </div>
  );
};

export const SectionButton = () => {
  return (
    <div className="section-btn wow fadeInUp" data-wow-delay="0.25s">
      <a href="#" className="btn-default">
        view all blog
      </a>
    </div>
  );
};
