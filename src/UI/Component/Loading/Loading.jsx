import React from "react";
import logoLoading from '../../../assets/images/loader.svg'

const Loading = () => {
  return (
    <div className="preloader">
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <img src={logoLoading} alt="loadingIcon" />
        </div>
      </div>
    </div>
    
  );
};

export default Loading;
