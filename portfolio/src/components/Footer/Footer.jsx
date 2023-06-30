import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer>
      <div>Designed and Developed by Rafael Gómez</div>
      <div>{year} RGG</div>
      <div>
        <ul className="footer-icons">
          <a href="#">
            <li>
              <AiFillGithub className="footer-icons-img" />
            </li>
          </a>
          <a href="#">
            <li>
              <AiFillLinkedin className="footer-icons-img" />
            </li>
          </a>
          <a href="#">
            <li>
              <AiFillLinkedin className="footer-icons-img" />
            </li>
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
