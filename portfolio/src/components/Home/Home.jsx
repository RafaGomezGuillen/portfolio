import React from "react";
import "./Home.css";
import { ParallaxBackgorund } from "../Parallax/Background/ParallaxBackgorund";
import ParallaxCard from "../Parallax/Card/ParallaxCard";
import { images } from "../../constants";

const Home = () => {
  return (
    <>
      <div className="home-presentation">
        <h2>hello, my name is Rafael</h2>
        <h1>I make web apps.</h1>
        <p>
          Hi Everyone, I am Rafael Gómez from Tenerife, Spain. I am a final year
          student pursuing a Certificate of Higher Education (HNC) in Web App
          developement at{" "}
          <a href="https://cifpcesarmanrique.es/">CIFP César Manrique</a>.
          <br />
          <br />
          Additionally, I am looking for an exciting opportunity abroad to
          participate in the Erasmus program and enrich my training as a web
          application development student.
        </p>
      </div>
      
      <ParallaxBackgorund
        src={images.homeBackground}
        alt="Space Port Background"
        height="50vh"
        fixed
        darken
      >
        <h1 className="parallax-title">
          Success is the sum of small efforts repeated day in and day out
        </h1>
      </ParallaxBackgorund>

      <div className="home-find-me">
        <div className="home-find-me-col">
          <h1>find me on</h1>
        </div>
        <div className="home-find-me-col">
          <ParallaxCard title={"hola"} />
        </div>
      </div>
    </>
  );
};

export default Home;
