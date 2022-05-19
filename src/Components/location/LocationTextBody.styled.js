import styled from "styled-components";
export const StyledLocationTextBody = styled.div`
  background-color: #151515;
  padding: 3rem 8.466vw;
  color: #fff;
  & .title {
    color: #fff;
    text-transform: uppercase;
    font-size: 3.125rem;
    margin: 0 0 3rem;
  }
  & h3 {
    color: #d5966c;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 900;
    margin: 0 0 1.25rem;
  }
  & p {
    font-family: "Outfit", sans-serif;
    font-weight: 300;
    font-size: 1.125rem;
    font-style: normal;
    margin: 0;
    line-height: 28px;
  }
  & .text-content {
    margin-top: 1.25rem;
    font-family: "Outfit", sans-serif;
    line-height: 28px;
  }
  @media (min-width: 768px) {
    padding: 11.45833vw 5.078125vw 10.4166vw;
    display: flex;
    & .title {
      margin-right: 8.85416vw;
      font-size: 7.1614vw;
    }
    & h3 {
      font-size: 4.166vw;
    }
    & p {
      font-size: 2.34375vw;
      line-height: 3.64583vw;
    }
    & .text-content {
      margin-top: 2.604vw;
      line-height: 3.64583vw;
      font-size: 2.34375vw;
    }
  }

  @media (min-width: 1024px) {
    padding: 7.222vw 11.45833vw 8.88vw;
    & .title {
      margin-right: 15.277vw;
      font-size: 4.8611vw;
    }
    & h3 {
      font-size: 2.5vw;
    }
    & p {
      font-size: 1.5277vw;
      line-height: 2.222vw;
    }
    & .text-content {
      margin-top: 2.222vw;
      font-size: 1.5277vw;
      line-height: 2.222vw;
    }
  }
`;
