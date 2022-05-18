import styled from "styled-components";
export const CustomMapStyled = styled.div`
  & .leaflet-container {
    width: 100%;
    height: 550px;
    z-index: 1;
  }
  @media (min-width: 768px) {
    & .leaflet-container {
      height: 600px;
    }
  }
  @media (min-width: 1024px) {
    & .leaflet-container {
      height: 58.59375vw;
    }
  }
`;
