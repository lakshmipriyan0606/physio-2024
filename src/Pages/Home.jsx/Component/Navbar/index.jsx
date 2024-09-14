import logo from '../../../../assets/images/logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" />
        </a>
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
          </ul>
        </div>
        <div className="header-btn d-inline-flex ml-auto">
          <a href="#" className="btn-default">+(123) 698-5245</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;