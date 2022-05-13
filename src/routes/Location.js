import React from "react";
import arrowRightIcon from "../assets/icon-arrow-right.svg";

import { StyledButton } from "../Components/styles/Button.styled";

const Location = () => {
  return (
    <div>
      <StyledButton to="/">
        <span>Our location</span>
        <img src={arrowRightIcon} alt="cos tam cos yam" />
      </StyledButton>
    </div>
  );
};

export default Location;
