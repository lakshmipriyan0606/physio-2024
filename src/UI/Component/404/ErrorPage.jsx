import React from 'react';
import ErrorPageImg from 'images/404-error-img.png'

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="row">
          <div className="error-page-image wow fadeInUp" data-wow-delay="0.25s">
            <img src={ErrorPageImg} alt="ErrorPageImg" />
          </div>
          <div className="error-page-content">
            <div className="error-page-content-heading">
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                <span>Oops!</span> Page Not Found
              </h2>
            </div>
            <div className="error-page-content-body">
              <p className="wow fadeInUp" data-wow-delay="0.5s">
                The page you are looking for does not exist
              </p>
              <a
                className="btn-default wow fadeInUp"
                data-wow-delay="0.75s"
              >
                Back To Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;