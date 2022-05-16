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
    margin-left: -11.45vw;
    & h1 {
      font-size: 9.114vw;
      line-height: 8.4635vw;
    }
    & p {
      font-size: 2.34375vw;
      line-height: 3.65vw;
    }
  }
  @media (min-width: 1024px) {
    margin-left: -7vw;
    padding: 2rem 4vw 0 0;
    & h1 {
      position: absolute;
      top: 189px;
      left: 85px;
      font-size: 7.617vw;
      line-height: 8.593vw;
      color: white;
      mix-blend-mode: difference;
    }
    & p {
      font-size: 2.14vw;
      line-height: 3.125vw;
    }
  }
  @media (min-width: 1440px) {
    margin: -14vw 0 0 -5vw;
    padding: 2rem 11.388vw 0 0;
    & h1 {
      top: 13.125vw;
      left: 11.45833vw;
      font-size: 6.666vw;
      line-height: 6.111vw;
    }
    & p {
      font-size: 1.5277vw;
      line-height: 2.2222vw;
    }
  }
`;
