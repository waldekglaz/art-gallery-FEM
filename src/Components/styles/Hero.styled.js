import styled from "styled-components";

export const StyledHero = styled.div`
  margin-bottom: 7.5rem;
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
