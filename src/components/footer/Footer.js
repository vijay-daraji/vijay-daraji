import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        VIJAY DARAJI
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/vijay-daraji-10a2b415a"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        {/* <a href="">
          <FaGithub />
        </a> */}
        <a href="https://www.instagram.com/vijay_darji_05/" target="_blank">
          <BsInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Vijay Daraji. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
