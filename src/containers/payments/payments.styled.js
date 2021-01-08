import styled from "styled-components";

export const PaymentTitleStyled = styled.div`
  font-family: ${(props) => props.theme.bodyFont};
  font-size: 30px;
  font-weight: 500;
  line-height: 1.2;
  color: black;
  margin-bottom: 14px;
`;

export const PaymentAddressStyled = styled.div`
  font-family: Arial;
  font-size: 15px;
  line-height: 1.18;
  text-align: left;
`;

export const PaymentAddressWrapperStyled = styled.div`
  width: 351px;
  padding: 20px 80px 20px 40px;
  border-radius: 15px;
  background-color: ${props => props.isSelected ? "#A0FDB6": "#f4f4f4"};
  margin: auto;
`;

export const PaymentNameStyled = styled.div`
  font-family: Arial;
  font-weight: bold;
  font-size: 18px;
  line-height: 1.18;
  text-align: left;
  margin-bottom: 10px;
`;
export const PaymentPhoneNoStyled = styled.div`
  font-family: ${(props) => props.theme.footerFontReg};
  font-size: 15px;
  line-height: 1.18;
  letter-spacing: 0.46px;
  margin-top: 7px;
  text-align: left;
`;

export const PaymentOptionWrapperStyled = styled.div`
  text-align: left;
  main {
    line-height: 1.2;
    margin: 2rem auto;
    max-width: 260px;
  }

  .radio-button {
    margin-bottom: 1rem;
  }

  .radio-button__label-wrapper {
    border-radius: 50%;
    cursor: pointer;
    display: block;
    padding-left: 2.5rem;
    position: relative;
    top: 0.25rem;
  }
  .radio-button__label-wrapper:hover
    .radio-button__input
    ~ .radio-button__custom-indicator {
    border-color: black;
  }

  .radio-button__label-title {
    margin-bottom: 20px;
    margin-left: 10px;
  }

  .radio-button__label-subtext {
    display: block;
    font-size: 0.85rem;
    font-style: italic;
  }

  .radio-button__custom-indicator {
    background-color: white;
    border: 2px solid;
    border-radius: 50%;
    height: 24px;
    left: 0;
    position: absolute;
    top: 0;
    width: 24px;
  }
  .radio-button__custom-indicator::after {
    background-color: black;
    border-radius: 50%;
    content: "";
    display: none;
    height: 6px;
    width: 6px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .radio-button__input {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }
  .radio-button__input:focus ~ .radio-button__custom-indicator {
    border-color: black;
  }
  .radio-button__input:checked ~ .radio-button__custom-indicator::after {
    display: block;
  }
  .radio-button__input:disabled ~ .radio-button__custom-indicator {
    opacity: 0.6;
    pointer-events: none;
  }
`;

export const PaymentOptionTitleStyled = styled.div`
  margin-top: 30px;
  font-family: ${(props) => props.theme.bodyFont};
  font-size: 30px;
  font-weight: 500;
  line-height: 1.2;
  color: black;
  margin-bottom: 25px;
`;

export const PaymentButtonWrapperStyled = styled.div`
  width: 20%;
  margin: 40px auto;
`;
