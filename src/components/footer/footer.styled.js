import styled from "styled-components";

export const FooterStyled = styled.div`
  font-family: MillionNotes;
  font-size: ${(props) => props.theme.fontSizes.font_30};
  height: 100%;
  width: 100%;
  background-color: inherit;
  color: ${(props) => props.textColor};
`;
