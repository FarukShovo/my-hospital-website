import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";

import {
  FaAngleDoubleRight,
} from "react-icons/fa";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="image">
          <img src="https://image.freepik.com/free-photo/medical-banner-with-icons_1325-1526.jpg" alt="" />
        </div>

        <div className="content">
          <h3>Health is wealth</h3>
          <p>
            We provide you services to keep you healthy. Stay with us take our services and be healthy!
          </p>
          <Link to="/home" className="btn">
            contact us <FaAngleDoubleRight></FaAngleDoubleRight>
          </Link>
        </div>
      </section>
      <div className="mt-5">
        <Services></Services>
      </div>
    </>
  );
};

export default Home;
