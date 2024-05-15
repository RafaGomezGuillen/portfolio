import React from "react";
import "./Home.css";
import { ParallaxBackgorund } from "../../components/Parallax/Background/ParallaxBackgorund";
import ParallaxCard from "../../components/Parallax/Card/ParallaxCard";
import { images } from "../../constants";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Contact } from "../../components";

const Home = () => {
  return (
    <>
      <div className="home-presentation">
        <h1>hello, my name is Rafael</h1>
        <h2>I make web apps.</h2>
        <p>
          Hi Everyone, I am Rafael Gómez from Tenerife, Spain and recently
          graduated from{" "}
          <a
            title="Go to CIFP César Manrique page"
            href="https://cifpcesarmanrique.es/"
            target="_blank"
          >
            CIFP César Manrique
          </a>{" "}
          getting a Certificate of Higher Education (HNC) in Web App
          developement.
          <br />
          <br />I am eager to expand my career as a web application developer
          and gain valuable experience in the field. I have a strong interest in
          creating user-friendly and secure websites and applications for
          various clients and purposes.
        </p>
      </div>

      <ParallaxBackgorund
        src={images.homeBackground}
        alt="Space Port Background"
        height="50vh"
        fixed
        darken
      >
        <h3 className="parallax-title">
          Success is the sum of small efforts repeated day in and day out
        </h3>
      </ParallaxBackgorund>

      <div className="home-find-me">
        <div className="home-find-me-col">
          <h4>find me on</h4>
          <p>
            Feel free to reach out to me through social media platforms and
            let's <label style={{ color: "#ff2957" }}>connect</label>!
          </p>
          <div>
            <ul className="home-icons">
              <li>
                <a
                  title="Go to Rafael Gómez GitHub profile page"
                  href="https://github.com/RafaGomezGuillen"
                  target="_blank"
                >
                  <AiFillGithub className="home-icons-img" />
                </a>
              </li>
              <li>
                <a
                  title="Go to Rafael Gómez LinkedIn profile page"
                  href="https://www.linkedin.com/in/rafael-g%C3%B3mez-guill%C3%A9n/?locale=en_US"
                  target="_blank"
                >
                  <AiFillLinkedin className="home-icons-img" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="home-find-me-col">
          <ParallaxCard title={"currently working with"} />
        </div>
      </div>

      <Contact />
    </>
  );
};

export default Home;
