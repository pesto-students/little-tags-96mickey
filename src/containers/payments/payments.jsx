import React from "react";
import { useSelector, useDispatch } from "react-redux";
// constants
import {
  Title,
  ModeOfPaymentText,
  PaymentOptionConfig,
} from "./../../constants/payments.contants";

// styles
import {
  PaymentTitleStyled,
  PaymentAddressWrapperStyled,
  PaymentAddressStyled,
  PaymentNameStyled,
  PaymentPhoneNoStyled,
  PaymentOptionWrapperStyled,
  PaymentOptionTitleStyled,
  PaymentButtonWrapperStyled,
} from "./payments.styled";

// components
import Button from "./../../components/button/button.component";
import { useHistory } from "react-router-dom";
import { CLEAR_CART } from "reducers/types.constants";

export function Payments(props) {
  const {default: defaultAddress} = useSelector((state) => state.address);
  const dispatch = useDispatch();
  const history = useHistory();

  const setPaymentMode = (event) => {
    console.log(event.target.value);
  };

  const paymentDone = () => {
    dispatch({
      type: CLEAR_CART
    });
    history.push("/thanks");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <PaymentTitleStyled>{Title}</PaymentTitleStyled>
      <PaymentAddressWrapperStyled>
        <PaymentNameStyled>{`${defaultAddress.firstName} ${defaultAddress.lastName}`}</PaymentNameStyled>
        <PaymentAddressStyled>{`${defaultAddress.line1}`}</PaymentAddressStyled>
        <PaymentPhoneNoStyled>{defaultAddress.phone}</PaymentPhoneNoStyled>
      </PaymentAddressWrapperStyled>

      <PaymentOptionTitleStyled>{ModeOfPaymentText}</PaymentOptionTitleStyled>
      <PaymentOptionWrapperStyled>
        <main>
          {PaymentOptionConfig.map(({ name, identifier }) => (
            <div class="radio-button">
              <label class="radio-button__label-wrapper">
                <h3 class="radio-button__label-title">{name}</h3>
                <input
                  type="radio"
                  name="sharing_preference"
                  value={identifier}
                  class="radio-button__input"
                  onChange={setPaymentMode}
                />
                <div class="radio-button__custom-indicator"></div>
              </label>
            </div>
          ))}
        </main>
      </PaymentOptionWrapperStyled>


        <PaymentButtonWrapperStyled>
          <Button
            type="primary"
            onClick={paymentDone}
          >
            Proceed To Payment
          </Button>
        </PaymentButtonWrapperStyled>
    </div>
  );
}

export default Payments;
