import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledButton = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  & span {
    background-color: #151515;
    color: #fff;
    font-size: 1.25rem;
    letter-spacing: 3.64px;
    text-transform: uppercase;
    padding: 1.5rem 2rem;
  }

  & img {
    width: 8px;
    height: 24px;
    background-color: #d5966c;
    padding: 1.5rem;
  }
  &:hover span {
    background-color: #d5966c;
  }
  &:hover img {
    background-color: #151515;
  }
`;
