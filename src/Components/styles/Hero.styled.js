import styled from "styled-components";

export const StyledHero = styled.div`
  margin-bottom: 7.5rem;
  & img {
    width: 100%;
    height: auto;
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & img {
      width: 56.9vw;
    }
  }
  @media (min-width: 1024px) {
    justify-content: center;

    & img {
      width: 37.5vw;
    }
  }
`;
