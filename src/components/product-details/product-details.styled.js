import styled from "styled-components";

export const ProductDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const ProductName = styled.div`
  max-width: 50vw;
  font-size: ${(props) => props.theme.fontSizes.font_24};
`;

export const ProductPrice = styled.div`
  font-size: ${(props) => props.theme.fontSizes.font_20};
  &:before {
    content: "₹ ";
  }
`;

export const ProductDescription = styled.div`
  font-size: ${(props) => props.theme.fontSizes.font_18};
  max-width: 40vw;
`;

export const ProductDetailsButtonWrapperStyled = styled.div`
  margin-top: 20px;
  width: 40%;
`;

export const ProductDetailsIconWrapperStyled = styled.div`
  margin-right: 20px;
  display: inline-block;
`;

export const AddToCartWrapper = styled.div`
  max-width: 200px;
`;

export const NotLoggedIn = styled.div`
  color: white;
  max-width: 200px;
  font-size: ${(props) => props.theme.fontSizes.font_12};
  opacity: 0.5;
`;
