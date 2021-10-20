import "./Doctors.css";
import React from "react";



const Doctors = () => {
  return (
    <section class="doctors" id="doctors">
      <h1 class="heading">
        Our <span>doctors</span>
      </h1>

      <div class="box-container">
        <div class="box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMTs3WyiEvF-JzkHZVaFIVte7frqydvYpr7Q&usqp=CAU" alt="" />
          <h3>
            Wang Wei
          </h3>
          <span>Cardiologist</span>
          <div class="share">
            <h4>Visiting Hour: 09:00AM-05:00PM</h4>
            <p>(Sun - Fri)</p>
          </div>
        </div>

        <div class="box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgut-XrUTj4kq8azPG0BcV3bwfaDrOvAEicg&usqp=CAU" alt="" />
          <h3>
            Alex Sandre
          </h3>
          <span>Oncologist</span>
          <div class="share">
            <h4>Visiting Hour: 09:00AM-05:00PM</h4>
            <p>(Sun - Fri)</p>
          </div>
        </div>

        <div class="box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_z3ysiGfCwpRMHmgROshnkzXz05qHXjCYg&usqp=CAU" alt="" />
          <h3>
            King Sum
          </h3>
          <span>Medicine</span>
          <div class="share">
            <h4>Visiting Hour: 09:00AM-05:00PM</h4>
            <p>(Sun - Fri)</p>
          </div>
        </div>

        <div class="box">
          <img src="image/doc-4.jpg" alt="" />
          <h3>
            Nathan Lion
          </h3>
          <span>Cardiologyst</span>
          <div class="share">
            <h4>Visiting Hour: 09:00AM-05:00PM</h4>
            <p>(Sun - Fri)</p>
          </div>
        </div>

        <div class="box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvYM1uBz2gzlcOYWCZQYAJfUAvwZRO6d4SQ&usqp=CAU" alt="" />
          <h3>
            Alvee Thom
          </h3>
          <span>Gastroliver</span>
          <div class="share">
            <h4>Visiting Hour: 09:00AM-05:00PM</h4>
            <p>(Sun - Fri)</p>
          </div>
        </div>

        <div class="box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOU3Jf0uekwSKiAzUnmWo0JJe0w2r-CpsYpw&usqp=CAU" alt="" />
          <h3>
            Farlin Aprila
          </h3>
          <span>Gynecologist</span>
          <div class="share">
            <h4>Visiting Hour: 09:00AM-05:00PM</h4>
            <p>(Sun - Fri)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
