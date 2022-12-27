import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [activeNow, setActiveNow] = useState("#");
  return (
    <>
      <nav>
        <a
          href="#"
          className={activeNow === "#" ? "active" : ""}
          onClick={() => setActiveNow("#")}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#experience"
          className={activeNow === "#experience" ? "active" : ""}
          onClick={() => setActiveNow("#experience")}
        >
          <BiBook />
        </a>
        <a
          href="#projects"
          className={activeNow === "#projects" ? "active" : ""}
          onClick={() => setActiveNow("#projects")}
        >
          <RiServiceLine />
        </a>
        <a
          href="#about"
          className={activeNow === "#about" ? "active" : ""}
          onClick={() => setActiveNow("#about")}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#contact"
          className={activeNow === "#contact" ? "active" : ""}
          onClick={() => setActiveNow("#contact")}
        >
          <BiMessageSquareDetail />
        </a>
        {/* <a
          href="#services"
          className={activeNow === "#services" ? "active" : ""}
          onClick={() => setActiveNow("#services")}
        >
          <RiServiceLine />
        </a> */}
      </nav>
    </>
  );
};

export default Nav;
