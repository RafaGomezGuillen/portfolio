import React, { Component } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { images } from "../../constants";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const navbarItems = [
  {
    label: "Home",
    icon: <AiOutlineHome className="navbar-icons" />,
    link: "/portfolio",
  },
  {
    label: "About",
    icon: <IoPersonOutline className="navbar-icons" />,
    link: "/about",
  },
  {
    label: "Works",
    icon: <FaLaptopCode className="navbar-icons" />,
    link: "/works",
  },
  {
    label: "Resume",
    icon: <FaRegFileAlt className="navbar-icons" />,
    link: "/resume",
  },
];

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
    }));
  };

  render() {
    return (
      <nav>
        <NavLink
          title="Go to home page"
          to="/portfolio"
          className="navbar-logo"
        >
          <img src={images.logo} alt="Rafael Gómez logo" />
        </NavLink>
        <div>
          <ul
            id="navbar"
            className={this.state.clicked ? "#navbar active" : "#navbar"}
          >
            {navbarItems.map((item, index) => (
              <li key={index}>
                <NavLink title={`Go to ${item.label} page`} to={item.link}>
                  {item.icon}
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i
            id="bar"
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </nav>
    );
  }
}

export default Navbar;
