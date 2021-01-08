import React from "react";
import { QuantitySelector } from "components";
import {
  CartItemCardTitleStyled,
  CartItemCardQuantityStyled,
  CartItemCardSizeStyled,
  CartItemCardPriceStyled,
  CartItemCardImageStyled,
  CartItemWrapperStyled,
} from "./cart.styled";
import { useDispatch } from "react-redux";

function CartItemCard({ item: { id, image, price, quantity, size, title } }) {
  const dispatch = useDispatch();
  const setSelectedQuantity = (evt, actionType) => {
    dispatch({
      type: actionType,
      payload: {
        id,
        price,
        image,
        quantity: evt,
        size,
      },
    });
  };

  return (
    <CartItemWrapperStyled className="row">
      <div className="col-lg-2">
        <CartItemCardImageStyled
          src={image}
          alt=""
          width="150px"
          height="150px"
        />
      </div>

      <div className="col-lg-8">
        <CartItemCardTitleStyled>{title}</CartItemCardTitleStyled>
        <div>
          <CartItemCardQuantityStyled>
            {`Quantity: `}
            <QuantitySelector
              minValue={1}
              value={quantity}
              onChange={setSelectedQuantity}
            />
          </CartItemCardQuantityStyled>
          <CartItemCardSizeStyled>{`Size: ${size}`}</CartItemCardSizeStyled>
        </div>
      </div>
      <div className="col-lg-2">
        <CartItemCardPriceStyled>{`₹ ${price}`}</CartItemCardPriceStyled>
      </div>
    </CartItemWrapperStyled>
  );
}

export default CartItemCard;
