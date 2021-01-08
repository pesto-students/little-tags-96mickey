import styled from "styled-components";

const styleDefaults = {
  fieldWidth: "60px",
  fieldHeight: "22px",
  fieldBorder: "1px solid #ccc",
  fieldBorderRadius: "2px",
  fieldBackground: "#fff",
  buttonWidth: "22px",
  buttonHeight: "22px",
  buttonColor: "black",
  buttonBorder: "1px solid #ccc",
  buttonBorderRadius: "2px",
  buttonBackground: "#f1f1f1",
};

export const Wrapper = styled.div`
  margin-bottom: 20px;
  display: inline-flex;
  *:focus {
    outline: none;
  }
  button {
    width: ${styleDefaults.buttonWidth};
    height: ${styleDefaults.buttonHeight};
    border-radius: ${styleDefaults.buttonBorderRadius};
    line-height: ${styleDefaults.buttonHeight};
    cursor: pointer;
    text-indent: -8000px;
    overflow: hidden;
    position: relative;
    &:first-child {
      border: ${styleDefaults.buttonBorder};
      &:before {
        content: "";
        display: block;
        width: 10px;
        height: 1px;
        background: ${styleDefaults.buttonColor};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    &:last-child {
      border: ${styleDefaults.buttonBorder};
      &:before {
        content: "";
        display: block;
        width: 10px;
        height: 1px;
        background: ${styleDefaults.buttonColor};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &:after {
        content: "";
        display: block;
        width: 1px;
        height: 10px;
        background: ${styleDefaults.buttonColor};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  input {
    width: ${styleDefaults.fieldWidth};
    height: ${styleDefaults.fieldHeight};
    line-height: ${styleDefaults.fieldHeight};
    text-align: center;
    border-radius: ${styleDefaults.fieldBorderRadius};
    padding: 0;
    border: ${styleDefaults.fieldBorder};
    font-size: ${(props) => props.theme.fontSizes.font_14};
    margin: 0 5px;
    background: ${styleDefaults.fieldBackground};
    color: inherit;
  }
`;
