import React from 'react';

const PageHeader = () => {
  return (
    <div className="page-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header-box">
              <h1 className="text-anime-style-2" data-cursor="-opaque">Page Not Found</h1>
              <nav className="wow fadeInUp">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index-2.html">home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    404 error
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;