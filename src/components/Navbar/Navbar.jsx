import React, { Component } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { images } from "../../constants";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

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
        <NavLink to="/" className="navbar-logo">
          <img src={images.logo} alt="logo" />
        </NavLink>
        <div>
          <ul
            id="navbar"
            className={this.state.clicked ? "#navbar active" : "#navbar"}
          >
            <li>
              <NavLink to="/">
                <AiOutlineHome className="navbar-icons" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <IoPersonOutline className="navbar-icons" />
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects">
                <FaLaptopCode className="navbar-icons" />
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume">
                <FaRegFileAlt className="navbar-icons" />
                Resume
              </NavLink>
            </li>
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
