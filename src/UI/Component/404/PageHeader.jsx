import React from "react";

const PageHeader = ({title}) => {


  return (
    <div className="page-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header-box">
              <h1
                className="text-anime-style-2"
                data-cursor="-opaque"
              >{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
