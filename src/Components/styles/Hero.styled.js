import styled from "styled-components";

export const StyledHero = styled.div`
  & img {
    width: 100%;
    height: auto;
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: strech;
    & img {
      flex-basis: 57%;
    }
  }
`;
