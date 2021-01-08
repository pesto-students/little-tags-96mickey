import styled from "styled-components";

export const CartWrapperStyled = styled.div`
  padding: 50px 115px;
`;

export const CartTitleStyled = styled.div`
  font-family: ${(props) => props.theme.bodyFont};
  font-size: 35px;
  font-weight: 500;
  line-height: 1.19;
  color: black;
`;

export const CartItemCardTitleStyled = styled.div`
  font-family: ${(props) => props.theme.bodyFont};
  font-size: 25px;
  font-weight: 500;
  line-height: 1.2;
  color: black;
  margin-bottom: 10px;
`;

export const CartItemCardQuantityStyled = styled.span`
  font-family: ${(props) => props.theme.bodyFont};
  font-size: 25px;
  font-weight: 500;
  line-height: 1.2;
  color: black;
  margin-right: 40px;
  margin-bottom: 10px;
  display: inline-block;
`;

export const CartItemCardSizeStyled = styled.span`
  font-family: ${(props) => props.theme.bodyFont};
  font-size: 25px;
  font-weight: 500;
  line-height: 1.2;
  color: black;
  margin-bottom: 10px;
  display: inline-block;
`;

export const CartItemCardPriceStyled = styled.div`
  font-family: ${(props) => props.theme.bodyFont};
  font-size: 25px;
  font-weight: 500;
  line-height: 1.2;
  color: black;
  margin-bottom: 10px;
`;

export const CartItemCardImageStyled = styled.img``;

export const CartItemWrapperStyled = styled.div`
  width: 100%;
  padding: 20px;
  box-shadow: 0 2px 8px 0 #e3e9e9;
  border-radius: 15px;
`;

export const CartTitleWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const CartImageWrapperStyled = styled.div`
  text-align: center;
`;
