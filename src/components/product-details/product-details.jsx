// vendor
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// styled
import {
  ProductDetailsStyled,
  ProductName,
  ProductPrice,
  ProductDescription,
  // ProductDetailsButtonWrapperStyled,
  ProductDetailsIconWrapperStyled,
  ProductDetailsButtonWrapperStyled,
} from "./product-details.styled";

// constants
import { ADD_TO_CART, OPEN_LOGIN_MODAL } from "reducers/types.constants";

// components
import IconComponent from "components/icon-component/icon-component";
import Button from "components/button/button.component";
import { SizeSelector, QuantitySelector } from "components";
import { success } from "./../notification/notification";
export const ProductDetails = ({ product }) => {
  const history = useHistory();
  const [selectedSize, setSelectedSize] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isSizeEmpty, setIsSetSizeEmpty] = useState(false);

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const dispatch = useDispatch();

  const onSizeSelect = (size) => {
    setSelectedSize(size);
    setIsSetSizeEmpty(false);
  };

  const addToCart = (isProceedToCheckout) => {
    if (!isLoggedIn) {
      dispatch({
        type: OPEN_LOGIN_MODAL,
      });
      return;
    }
    if (!selectedSize) {
      alert("Please select the size option");
      setIsSetSizeEmpty(true);
      return;
    }
    dispatch({
      type: ADD_TO_CART,
      payload: {
        ...product,
        quantity: selectedQuantity,
        size: selectedSize,
      },
    });

    success("Product Added to Cart Sucessfully");

    isProceedToCheckout && history.push("/cart");
  };

  return (
    <ProductDetailsStyled>
      <ProductName>{product.title}</ProductName>
      <ProductPrice>{product.price}</ProductPrice>
      <ProductDescription>{product.description}</ProductDescription>
      <SizeSelector
        onSizeSelect={(size) => onSizeSelect(size)}
        size={product.size}
        selectedSize={selectedSize}
        isSizeEmpty={isSizeEmpty}
      />
      <QuantitySelector minValue={1} onChange={setSelectedQuantity} />
      <ProductDetailsButtonWrapperStyled>
        <Button onClick={addToCart}>
          <ProductDetailsIconWrapperStyled>
            <IconComponent name="fa-shopping-cart" color="white" />
          </ProductDetailsIconWrapperStyled>
          Add to Cart
        </Button>
      </ProductDetailsButtonWrapperStyled>
      {/* <ProductDetailsButtonWrapperStyled>
        <Button onClick={() => addToCart(true)}>Proceed to Checkout</Button>
      </ProductDetailsButtonWrapperStyled> */}
    </ProductDetailsStyled>
  );
};
