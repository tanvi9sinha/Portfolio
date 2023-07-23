import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home.jpg";
import Type from "./Typewriter";
// import cisco from "../../Assets/cisco.jpg";
// import aspida from "../../Assets/aspida.jpeg";
// import ncsu from "../../Assets/ncsu.png";
// import pes from "../../Assets/pes.png";

function Home() {
  return (
    <section className="home-section">
        <div className="shooting-star"></div>
      <Container className="home-container">
        <div className="home-header">
          <div className="hey-there">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hey There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>{" "}
              I'm Tanvi Sinha
            </h1>
          </div>
        </div>

        <div className="polaroid-wrapper">
          <div className="polaroid">
            <img src={homeLogo} alt="home pic" className="home-logo" />
          </div>
          <div className="polaroid-caption">
            <Type />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Home;
