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
          <li>
            <a
              title="Go to Rafael Gómez GitHub profile page"
              href="https://github.com/RafaGomezGuillen"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="footer-icons-img" />
            </a>
          </li>
          <li>
            <a
              title="Go to Rafael Gómez LinkedIn profile page"
              href="https://www.linkedin.com/in/rafael-g%C3%B3mez-guill%C3%A9n/?locale=en_US"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="footer-icons-img" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
