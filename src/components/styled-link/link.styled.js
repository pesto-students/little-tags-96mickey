import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  width: 30%;
  color: inherit;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;
