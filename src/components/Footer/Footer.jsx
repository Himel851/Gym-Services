import React from "react";
import "./Footer.css";
import Github from "../../images/github.png";
import Instagram from "../../images/instagram.png";
import LinkeIn from "../../images/linkedin.png";
import Logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />

      <div className="Footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkeIn} alt="" />
        </div>
        <div className="logo-f">
        <img src={Logo} alt="" />
      </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
