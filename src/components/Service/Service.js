import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { img, name, id } = props.service;

  return (
    <div className="col service-card">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5>Service:{name}</h5>
          <Link to={`/details/${id}`}><button className="btn btn-warning p-3">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
