import { StyledLink } from "components/styled-link";
import React from "react";
import {
  ProductCardStyled,
  ProductImageStyled,
  ProductNameStyled,
  ProductPriceStyled,
} from "./product-card.styled";

export const ProductCard = (props) => {
  return (
    <StyledLink
      to={`/prod/${props.item.id}/description`}
    >
      <ProductCardStyled>
        <ProductImageStyled src={props.item.image} />
        <div>
          <ProductNameStyled>{props.item.title}</ProductNameStyled>
          <ProductPriceStyled>{props.item.price}</ProductPriceStyled>
        </div>
      </ProductCardStyled>
    </StyledLink>
  );
};
