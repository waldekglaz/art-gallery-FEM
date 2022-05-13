import React from "react";
import { StyledHeroBody } from "../styles/HeroBody.styled";
import { StyledButton } from "../styles/Button.styled";
import arrowRightIcon from "../../assets/icon-arrow-right.svg";

const HeroBody = () => {
  return (
    <StyledHeroBody>
      <h1>
        Modern
        <br /> Art Gallery
      </h1>
      <p>
        The arts in the collection of the Modern Art Gallery all started from a
        spark of inspiration. Will these pieces inspire you? Visit us and find
        out.
      </p>

      <StyledButton primary to="/location">
        <span>Our location</span>
        <img src={arrowRightIcon} alt="button icon" />
      </StyledButton>
    </StyledHeroBody>
  );
};

export default HeroBody;
