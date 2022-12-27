import React from "react";
import CTA from "./CTA";
import "./Header.css";
import HeaderSocials from "./HeaderSocials";
import Typical from "react-typical";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vijay Daraji</h1>
        <div className="profile-details-role">
          <span>
            {" "}
            <h2>
              {" "}
              <Typical
                loop={Infinity}
                steps={["Ethusiastic Dev 💻", 1000, "Java Developer 💻", 1000]}
              />
            </h2>
            <span className="profile-details-role-tagline">
              <p>builing an application with back end operations</p>
            </span>
          </span>
        </div>
        <CTA />
        <HeaderSocials />

        <div className="profile-picture-background">
          <div className="profile-picture"></div>
        </div>
        <a href="#about" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
