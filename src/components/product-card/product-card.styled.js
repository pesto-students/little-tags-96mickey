import styled from "styled-components";

export const ProductCardStyled = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  padding: 30px;
  width: 550px;
  box-shadow: 0 0 ${(props) => props.theme.spaces.space_8} 0
    rgba(10, 91, 106, 0.16);
  cursor: pointer;
`;

export const ProductImageStyled = styled.img`
  height: 100px;
  width: 140px;
  border-radius: 20px;
  margin-right: 20px;
`;

export const ProductNameStyled = styled.div`
  padding: 5px;
  flex-grow: 2;
  align-self: center;
  font-size: ${(props) => props.theme.fontSizes.font_20};
`;

export const ProductPriceStyled = styled.div`
  align-self: center;
  font-size: ${(props) => props.theme.fontSizes.font_20};
  &:before {
    content: "₹ ";
  }
  font-family: ${(props) => props.theme.headingFont};
  padding: 5px;
  flex-grow: 2;
  align-self: center;
  font-size: 25px;
`;

// export const ProductPriceStyled = styled.div`
//   align-self: center;
//   font-size: 15px;
//   &:before {
//     content: "₹ ";
//   }
// `;
