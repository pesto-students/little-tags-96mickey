import React from "react";
import { Link } from "react-router-dom";
import {
  ProductCardStyled,
  ProductImageStyled,
  ProductNameStyled,
  ProductPriceStyled,
} from "./product-card.styled";

export const ProductCard = (props) => {
  return (
    <Link
      to={`/prod/${props.item.id}/description`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ProductCardStyled>
        <ProductImageStyled src={props.item.image} />
        <div>
          <ProductNameStyled>{props.item.title}</ProductNameStyled>
          <ProductPriceStyled>{props.item.price}</ProductPriceStyled>
        </div>
      </ProductCardStyled>
    </Link>
  );
};
