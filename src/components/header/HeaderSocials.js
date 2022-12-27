import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/vijay-daraji-10a2b415a"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      {/* <a href="https://linkedin.com" target="_blank">
        <FaGithub />
      </a> */}
      <a href="https://www.instagram.com/vijay_darji_05/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
