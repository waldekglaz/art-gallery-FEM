import styled from "styled-components";

export const StyledMainText = styled.div`
  background-color: ${(props) => (props.dark ? "#151515" : "transparent")};
  padding: ${(props) => (props.dark ? "3rem 1.5rem" : 0)};
  & h2 {
    margin: 1.5625rem 0 1.3125rem;
    color: ${(props) => (props.dark ? "#fff" : "#151515")};
    font-size: 3.125rem;
    text-transform: uppercase;
    line-height: 45px;
  }
  & p {
    font-family: "Outfit", sans-serif;
    color: ${(props) => (props.dark ? "#fff" : "#444")};
    line-height: 28px;
    font-size: 1.125rem;
  }
`;
