import { FaBars, FaHamburger } from "react-icons/fa";
import logo from "../../../../../assets/images/logo.svg";
import { Fade as Hamburger } from "hamburger-react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" />
        </a>
        <div className="collapse navbar-collapse justify-content-center main-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
          </ul>
        </div>
        <div className="header-btn d-lg-inline-flex ml-auto d-none">
          <a href="#" className="btn-default">
            +(123) 698-5245
          </a>
        </div>
        <div className="bar d-flex d-lg-none">
          <Hamburger direction="right" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
