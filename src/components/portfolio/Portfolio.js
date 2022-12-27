import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/virtual_trial.jpg";
import IMG2 from "../../assets/library.jpg";
import IMG3 from "../../assets/foodzone.jpg";
import IMG4 from "../../assets/social.png";
import IMG5 from "../../assets/ecommerce.jpg";
import IMG6 from "../../assets/chat.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Virtual Product Trial",
    github: "",
    demo: "",
  },
  {
    id: 2,
    image: IMG2,
    title: "Library Management System",
    github: "",
    demo: "",
  },
  {
    id: 3,
    image: IMG3,
    title: "FoodZone Application",
    github: "",
    demo: "",
  },
  {
    id: 4,
    image: IMG4,
    title: "ReachMe Application",
    github: "",
    demo: "",
  },
  {
    id: 5,
    image: IMG5,
    title: "Shopii Application",
    github: "",
    demo: "",
  },
  {
    id: 6,
    image: IMG6,
    title: "Chat Application",
    github: "",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image-container">
                <img
                  src={image}
                  alt={title}
                  className="portfolio__item-image"
                />
              </div>

              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
