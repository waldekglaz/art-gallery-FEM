import styled from "styled-components";

export const StyledHeroBody = styled.div`
  padding: 2rem 5% 0;
  & h1 {
    margin: 0 0 2rem;
    font-size: 3.75rem;
    line-height: 55px;
    text-transform: uppercase;
    font-weight: 900;
    color: #151515;
  }
  & p {
    font-family: "Outfit", sans-serif;
    margin: 0 0 2rem;
    color: #444444;
    font-size: 1.125rem;
    line-height: 28px;
    font-weight: 300;
  }
  @media (min-width: 768px) {
    width: 339px;
    margin-left: -88px;
  }
`;
