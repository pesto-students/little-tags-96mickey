import styled from "styled-components";

export const ProductDescriptionStyled = styled.div`
  padding-bottom: 20px;
  min-height: 50vh;
  max-width: 90vw;
  margin: auto;
  display: flex;
  justify-content: center;
`;

export const ProductDiscoverTitle = styled.div`
  font-family: ${(props) => props.theme.headingFont};
  font-size: 61px;
  line-height: 1.2;
  text-align: center;
  width: 100%;
  margin-top: 70px;
  color: ${(props) => props.theme.colors.dark};
`;
