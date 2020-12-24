import styled from "styled-components";

export const ProductSectionComponentTitleStyled = styled.div`
  font-family: ${(props) => props.theme.headingFont};
  font-size: 61px;
  line-height: 1.2;
  text-align: center;
  width: 100%;
  margin-top: 70px;
  color: ${(props) => props.theme.colors.dark};
`;

export const ProductSectionCategoryImageStyled = styled.div`
  height: ${(props) => props.height || "250px"};
  width: 100%;
  margin-right: 10px;
`;

export const ProductSectionCategoryWrapperStyled = styled.div`
  padding: 60px;
  display: grid;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
`;
