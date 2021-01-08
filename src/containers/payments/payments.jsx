import React from "react";
import { useSelector } from "react-redux";

// constants
import {
  Title,
  ModeOfPaymentText,
  PaymentOptionConfig,
  Address,
  PhoneNo,
  ProceedToPayments,
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

export function Payments() {
  const name = useSelector((state) => state.user.name);

  const setPaymentMode = (event) => {
    console.log(event.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <PaymentTitleStyled>{Title}</PaymentTitleStyled>
      <PaymentAddressWrapperStyled>
        <PaymentNameStyled>{name || "John Doe"}</PaymentNameStyled>
        <PaymentAddressStyled>{Address}</PaymentAddressStyled>
        <PaymentPhoneNoStyled>{PhoneNo}</PaymentPhoneNoStyled>
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
          onClick={() => this.props.history.push(ProceedToPayments)}
        >
          Proceed To Payment
        </Button>
      </PaymentButtonWrapperStyled>
    </div>
  );
}

export default Payments;
