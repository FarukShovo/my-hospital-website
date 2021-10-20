import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaEnvelope,

} from "react-icons/fa";
import {
  FcCallback,
  FcGlobe,
  FcCellPhone,
} from "react-icons/fc";

const Footer = () => {
  return (
    <section className="footer">
      <h1 className="text-primary">Medicare General Hospital & Diagnostic Center</h1>
      <div className="box-container">
        <div className="box">
          <h3>contact info</h3>
          <Link to="#">
            {" "}
            <i className="fas fa-phone">
              {" "}
              <FcCallback></FcCallback>{" "}
            </i>{" "}
            +152-222-3526{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fas fa-phone">
              <FcCellPhone></FcCellPhone>{" "}
            </i>{" "}
            +0900-666-3333{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fas fa-envelope">
              {" "}
              <FaEnvelope></FaEnvelope>{" "}
            </i>{" "}
            healthcare09@hotmail.com{" "}
          </Link>

          <Link to="#">
            {" "}
            <i className="fas fa-map-marker-alt">
              {" "}
              <FcGlobe></FcGlobe>{" "}
            </i>{" "}
            Dhaka, Bangladesh - 1200{" "}
          </Link>
        </div>

        <div className="box">
          <h3>follow us</h3>
          <Link to="#">
            {" "}
            <i className="fab fa-facebook-f">
              <FaFacebook></FaFacebook>
            </i>{" "}
            facebook{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fab fa-twitter">
              <FaTwitter></FaTwitter>
            </i>{" "}
            twitter{" "}
          </Link>

          <Link to="#">
            {" "}
            <i className="fab fa-instagram">
              {" "}
              <FaInstagram></FaInstagram>{" "}
            </i>{" "}
            instagram{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fab fa-linkedin">
              {" "}
              <FaLinkedin></FaLinkedin>{" "}
            </i>{" "}
            linkedin{" "}
          </Link>

        </div>
      </div>


    </section>
  );
};

export default Footer;
