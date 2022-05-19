import styled from "styled-components";

export const StyledLocation = styled.div`
  position: relative;
  & .location-btn {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  & footer {
    background-color: #d5966c;
    color: #151515;
  }
  & .social-icon {
    filter: invert(100%) sepia(300%) saturate(18%) hue-rotate(425deg)
      brightness(89%) contrast(84%);
  }
  & .social-icon:hover {
    filter: invert(0%) sepia(7%) saturate(7454%) hue-rotate(254deg)
      brightness(110%) contrast(110%);
  }
`;
