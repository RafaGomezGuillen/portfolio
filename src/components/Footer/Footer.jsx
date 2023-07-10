import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer>
      <div>Designed and Developed by Rafael Gómez</div>
      <div>COPYRIGHT © {year} RG</div>
      <div>
        <ul className="footer-icons">
          <a href="https://github.com/RafaGomezGuillen">
            <li>
              <AiFillGithub className="footer-icons-img" />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/rafael-g%C3%B3mez-guill%C3%A9n/?locale=en_US">
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
