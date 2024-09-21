import { FaBars, FaHamburger } from "react-icons/fa";
import logo from "../../../../../assets/images/logo.svg";
import { Fade as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" />
          </a>
          <div className="collapse navbar-collapse justify-content-center main-menu">
            <ul className="navbar-nav">
              {navBarList?.map((nav) => {
                return (
                  <li key={nav?.id} className="nav-item">
                    <Link className="nav-link" to={nav?.link}>
                      {nav?.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="header-btn d-lg-inline-flex ml-auto d-none mx-3">
            <Link to={'/book-appointment'} className="btn-default">
             Book Appiontment
            </Link>
          </div>
          <div
            className="bar d-flex d-lg-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Hamburger direction="right" />
          </div>
        </div>
      </nav>
      <div className="d-lg-none">
        <SidebarMenu isOpen={isOpen} />
      </div>
    </>
  );
};

const navBarList = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Services",
    link: "/services",
  },
  {
    id: 4,
    name: "Our detail",
    link: "/our-detail",
  },
  {
    id: 5,
    name: "Contact Us",
    link: "/contact",
  }
]

;
const sidebarList = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Services",
    link: "/services",
  },
  {
    id: 4,
    name: "Our detail",
    link: "/our-detail",
  },
  {
    id: 5,
    name: "Contact Us",
    link: "/contact",
  }
];

const SidebarMenu = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "expand" : "collapse"}`}>
      <ul>
        {sidebarList.map((data) => {
          return (
            <Link key={data.id} to={data.link} onClick={()=>setIsOpen(!isOpen)}>
              {data.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
