import styled from "styled-components";

export const IconWrapperStyled = styled.i`
  font-size: ${(props) => props.size};
  color: ${(props) => (props) => props.color};
  cursor: pointer;
`;
