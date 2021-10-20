import React from "react";
import { Link } from "react-router-dom";
import "./About.css";


const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>About</span> us
      </h1>

      <div className="row">
        <div className="image">
          <img src="https://image.freepik.com/free-photo/doctor-with-stethoscope-hand-hospital-background_34200-156.jpg" alt="" />
        </div>

        <div className="content">
          <h3>We take care of your healthy</h3>
          <p>
            Check your Health find your body and soul healthy!!
          </p>
          <p>Because Your Life Matters. Healing Hands. Caring Hearts.</p>

        </div>
      </div>
    </section>
  );
};

export default About;
