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
                <AiFillGithub
                  style={{ color: "#fff", width: "25px", height: "25px" }}
                />
              </li>
            </a>
            <a href="#">
              <li>
                <AiFillLinkedin
                  style={{ color: "#fff", width: "25px", height: "25px" }}
                />
              </li>
            </a>
            <a href="#">
              <li>
                <AiFillLinkedin
                  style={{ color: "#fff", width: "25px", height: "25px" }}
                />
              </li>
            </a>
          </ul>
        </div>
      </footer>
    );
};

export default Footer;
