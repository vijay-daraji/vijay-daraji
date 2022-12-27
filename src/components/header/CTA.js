import React from "react";
import CV from "../../assets/RESUME.pdf";
import { FiDownload } from "react-icons/fi";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download="Vijay daraji.pdf" className="btn">
        Resume <FiDownload className="cta-icon" />
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
