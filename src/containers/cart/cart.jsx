import React, { Component } from "react";
import { connect } from "react-redux";
import CartItemCard from "./cart-card";
import {
  CartWrapperStyled,
  CartTitleStyled,
  CartTitleWrapperStyled,
  CartImageWrapperStyled,
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
    return this.props.cart.addedItems.length === 0 ? (
      <CartImageWrapperStyled>
        <img
          src={require("./../../assets/images/empty-cart.png").default}
          alt=""
          srcset=""
        />
      </CartImageWrapperStyled>
    ) : (
      <CartWrapperStyled>
        <CartTitleWrapperStyled>
          <CartTitleStyled>Your Cart</CartTitleStyled>
          <CartTitleStyled>{this.props.cart.total}</CartTitleStyled>
        </CartTitleWrapperStyled>

        {renderCartItems(this.props.cart.addedItems)}
      </CartWrapperStyled>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export const Cart = connect(mapStateToProps)(CartComponent);
