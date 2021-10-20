import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Details.css"

const Details = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/Hospital.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const { id } = useParams();
  const details = services.find(
    (service) => parseInt(service.id) === parseInt(id)
  );
  console.log(details);
  return (
    <div className="details">
      <div className="box">
        {details && <img src={details.img} alt="" />}
        <h3>{details && details.name}</h3>
        <h5>{details && details.description}</h5>

      </div>
    </div>
  );
};

export default Details;
