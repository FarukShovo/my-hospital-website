import React from "react";
import "./Review.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Review = () => {
  return (
    <section class="review" id="review">
      <h1 class="heading">
        Client's <span>review</span>
      </h1>

      <div class="box-container">
        <div class="box">
          <img src="https://scontent.fdac91-1.fna.fbcdn.net/v/t39.30808-1/c0.10.240.240a/p240x240/242360616_4359503844169452_1251754321581718837_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeH6GvEd3XL0klQn5ImjVKBvsq2VaewV0r6yrZVp7BXSvuUTZhs-xzVhMlRXAJPPywpfyQUPGdOtETBRjqu0aQLj&_nc_ohc=KY4tSdFdPVIAX-0pUsu&_nc_ht=scontent.fdac91-1.fna&oh=70fba3c06e3eac8604d51dea7e15f44e&oe=617587F0" alt="" />
          <h3>Ratul </h3>
          <div class="stars">
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>

            <i class="fas fa-star-half-alt">
              <FaStarHalfAlt></FaStarHalfAlt>
            </i>
          </div>
          <p class="text">
            I am very much pleased about your service. You became the savior
            when I need you badly.
          </p>
        </div>

        <div class="box">
          <img src="https://scontent.fdac91-1.fna.fbcdn.net/v/t1.6435-9/245166994_10227425904614703_4436505338492837839_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGDW4oecl6CCKUghpApLmjJOiJsXaJN6tU6Imxdok3q1dCdbnwLNIH4TW72KcbQrU9OpJKXm4mlq_LR70taOSrh&_nc_ohc=XTEwd-LmaSoAX8i_zoI&tn=gbjOcL6jlUXprL4s&_nc_ht=scontent.fdac91-1.fna&oh=9fa400efcf0adde6429553639e1a2b97&oe=61968A91" alt="" />
          <h3>Tyson</h3>
          <div class="stars">
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
          </div>
          <p class="text">
            I have became your big fan and up to the mark. God bless you!
          </p>
        </div>

        <div class="box">
          <img src="https://scontent.fdac91-1.fna.fbcdn.net/v/t1.6435-1/c0.0.240.240a/p240x240/201034386_1025997301472898_514052188481623474_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeEJach7bygzetR9lkscvhMb4MOIhUlahWLgw4iFSVqFYjtPCXYzQi9gmaUQb1qjY8vpOeIAXcfZtAAV9D2na-6k&_nc_ohc=YXd6PLDMeYIAX_pJB7H&_nc_ht=scontent.fdac91-1.fna&oh=e0b6110ad70d6a2c9505f48be4b43aa4&oe=6194C338" alt="" />
          <h3>Nasir Uddin</h3>
          <div class="stars">
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>

            <i class="fas fa-star-half-alt">
              <FaStarHalfAlt></FaStarHalfAlt>
            </i>
          </div>
          <p class="text">
            I am very much pleased with you service. God bless you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Review;
