import styled from "styled-components";

export const ProductListStyled = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductListHeadingStyled = styled.div`
  font-size: ${(props) => props.theme.fontSizes.font_30};
  margin-bottom: 20px;
`;
