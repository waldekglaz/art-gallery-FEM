import React from "react";
import logo from "../../assets/logo.png";
import SocialIcon from "./SocialIcon";
import { StyledFooter } from "../styles/Footer.styled";
import facebookLogo from "../../assets/icon-facebook.svg";
import instagramLogo from "../../assets/icon-instagram.svg";
import twitterLogo from "../../assets/icon-twitter.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <img className="footer__img" src={logo} alt="gallery logo" />
      <p>
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at{" "}
        <address>99 King Street, Newport, USA.</address>
      </p>
      <div className="flex-container">
        <SocialIcon src={facebookLogo} href="#" />
        <SocialIcon src={instagramLogo} href="#" />
        <SocialIcon src={twitterLogo} href="#" />
      </div>
    </StyledFooter>
  );
};
export default Footer;
