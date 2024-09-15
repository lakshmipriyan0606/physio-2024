import TopbarContactInfo from './TopbarContactInfo';
import TopbarSocialLinks from './TopbarSocialLinks';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row align-items-center">
        <div className="col-md-12 col-12 d-flex justify-content-between p-1">
          <TopbarContactInfo />
          <TopbarSocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;