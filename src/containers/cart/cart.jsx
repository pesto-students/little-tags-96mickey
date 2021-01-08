import React, { Component } from "react";
import { connect } from "react-redux";
import CartItemCard from "./cart-card";
import {
  CartWrapperStyled,
  CartTitleStyled,
  CartTitleWrapperStyled,
} from "./cart.styled";

const renderCartItems = (Items) =>
  Array.isArray(Items) &&
  Items.map((item, index) => (
    <CartItemCard item={item} key={`CartItem-${index}`} />
  ));

class CartComponent extends Component {
  static propTypes = {};
  state = {};

  render() {
    return (
      <div>
        <CartWrapperStyled>
          <CartTitleWrapperStyled>
            <CartTitleStyled>Your Cart</CartTitleStyled>
            <CartTitleStyled>{this.props.cart.total}</CartTitleStyled>
          </CartTitleWrapperStyled>

          {renderCartItems(this.props.cart.addedItems)}
        </CartWrapperStyled>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export const Cart = connect(mapStateToProps)(CartComponent);
