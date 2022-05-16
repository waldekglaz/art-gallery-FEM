import React from "react";
import { StyledMainText } from "../styles/MainText.styled";

const MainText = (props) => {
  return (
    <StyledMainText className="props.className">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </StyledMainText>
  );
};

export default MainText;
