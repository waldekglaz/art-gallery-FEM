import styled from "styled-components";

export const StyledHero = styled.div`
  & img {
    width: 100%;
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    & img {
      flex-basis: 57%;
    }
  }
`;
