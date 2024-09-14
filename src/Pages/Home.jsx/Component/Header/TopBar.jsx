import TopbarContactInfo from './TopbarContactInfo';
import TopbarSocialLinks from './TopbarSocialLinks';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-9 col-md-12">
          <TopbarContactInfo />
          <TopbarSocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;