import React from "react";

import HeroBody from "./HeroBody";
import heroImgMobile from "../../assets/mobile/image-hero.jpg";
import heroImgTablet from "../../assets/tablet/image-hero.jpg";
import { StyledHero } from "../styles/Hero.styled";

const Hero = () => {
  return (
    <StyledHero>
      <div></div>
      <picture>
        <source srcSet={heroImgTablet} media="(min-width: 768px)" />
        <img src={heroImgMobile} alt="people in art gallery" />
      </picture>
      <HeroBody />
    </StyledHero>
  );
};

export default Hero;
