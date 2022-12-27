import React from "react";
import "./Testimonials.css";
import AVATAR1 from "../../assets/user.png";

// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVATAR1,
    name: "Rohan Pandya",
    review: "He is very helpful and quick to resolve any issues",
  },
  {
    avatar: AVATAR1,
    name: "Kiran Abhi",
    review: "He done a great job so far",
  },

  {
    avatar: AVATAR1,
    name: "Usha Maheshvari",
    review: "Delivered beyond the requirements",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review, index }) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="client" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
