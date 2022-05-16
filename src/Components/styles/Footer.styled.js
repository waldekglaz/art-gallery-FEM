import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #151515;
  color: #fff;
  padding: 3rem 2rem;
  & p {
    font-family: "Outfit", sans-serif;
    line-height: 26px;
    margin-bottom: 2.375rem;
  }
  & address {
    font-style: normal;
    display: inline;
  }
  & .social-icon {
    margin-right: 1.25rem;
  }
  @media (min-width: 768px) {
    padding: 7.29166vw 5.078125vw;
    display: flex;
    justify-content: centre;
    align-items: flex-start;
    & .footer__img {
      width: 14.3229vw;
    }
    & p {
      margin: 0;
      font-size: 2.08333vw;
      line-height: 3.3854vw;
      padding: 0 17.3177vw 0 8.457vw;
    }
    & .flex-container {
      display: flex;
      align-items: center;
    }
    & .social-icon {
      width: 2.604vw;
      margin-left: 2.604vw;
      margin-right: 0;
    }
  }
  @media (min-width: 1024px) {
    padding: 5.55vw 11.45833vw;
  }
  & p {
    margin: 0;
    font-size: 1.25vw;
    line-height: 1.9444vw;
    padding: 0 9.7222vw 0 8.457vw;
  }
  & .social-icon {
    width: 1.3888vw;
    margin-left: 1.3888vw;
  }
`;
