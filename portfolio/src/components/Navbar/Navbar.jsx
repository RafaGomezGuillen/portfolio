import React, { Component, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { images } from "../../constants";
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
        <a href="/" className="navbar-logo">
          <img
            src={images.logo}
            alt="logo"
          />
        </a>
        <div>
          <ul
            id="navbar"
            className={this.state.clicked ? "#navbar active" : "#navbar"}
          >
            <li>
              <a href="/">
                <AiOutlineHome className="navbar-icons" />
                Home
              </a>
            </li>
            <li>
              <a href="/about">
                <IoPersonOutline className="navbar-icons" />
                About
              </a>
            </li>
            <li>
              <a href="/projects">
                <FaLaptopCode className="navbar-icons" />
                Projects
              </a>
            </li>
            <li>
              <a href="#">
                <FaRegFileAlt className="navbar-icons" />
                Resume
              </a>
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