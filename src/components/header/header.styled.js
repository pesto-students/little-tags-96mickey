import styled from "styled-components";

export const HeaderStyled = styled.div`
  font-family: MillionNotes;
  font-size: ${(props) => props.theme.fontSizes.font_30};
  width: 100%;
  background-color: inherit;
  color: ${(props) => props.textColor};
`;
