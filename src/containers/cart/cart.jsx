import React, { Component } from "react";
import { connect } from "react-redux";
import CartItemCard from "./cart-card";
import {
  CartWrapperStyled,
  CartTitleStyled,
  CartTitleWrapperStyled,
  CartImageWrapperStyled,
  CartButtonWrapperStyled,
} from "./cart.styled";

// constants
import { AddressPath } from "./../../constants/cart.constants";

// components
import Button from "./../../components/button/button.component";

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
          <CartTitleStyled>{this.props.cart.total.toFixed(2)}</CartTitleStyled>
        </CartTitleWrapperStyled>

        {renderCartItems(this.props.cart.addedItems)}

        <CartButtonWrapperStyled>
          <Button
            type="primary"
            onClick={() => this.props.history.push(AddressPath)}
          >
            Proceed
          </Button>
        </CartButtonWrapperStyled>
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
