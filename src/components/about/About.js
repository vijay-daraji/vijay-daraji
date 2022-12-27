import React from "react";
import "./About.css";
import ProfileImage from "../../assets/profile.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__profile">
          <img
            src={ProfileImage}
            alt="profile"
            className="about__profile-image"
          />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>4+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <div className="work__description">
            <p>Work description</p>
            <ul>
              <li>
                Having 1.3+ years of proven work experience as a Java backend
                developer.
              </li>
              <li>Experience of working on Core Java/J2EE & OOPS concept.</li>
              <li>
                Excellent knowledge of Relational Databases, SQL and ORM
                technologies (JPA, Hibernate).
              </li>
              <li>
                Hands on experience in designing and developing applications
                using Java EE platforms.
              </li>
              <li>
                Experience of Spring boot,hibernate, RESTful web services.
              </li>
              <li>
                Hands on experience on basic front-end technologies like
                Reactjs, Javascript, HTML, CSS.
              </li>
              <li>
                Good understanding of version control systems such as Git.
              </li>
              <li>Good knowledge of data structures and algorithms.</li>
              <li>
                Adapt quickly and keep up with new technologies, techniques, and
                project requirements.
              </li>
              <li>
                Experience doing Software Development using Agile methodologies.
              </li>
              <li>Analytical mindset and good problem-solving skills.</li>
              <li>Excellent written and verbal communication.</li>
            </ul>
          </div>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
