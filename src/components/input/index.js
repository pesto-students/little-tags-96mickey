import IconComponent from "components/icon-component/icon-component";
import React from "react";

// styles
import {
  InputStyled,
  InputWrapperStyled,
  InputIconWrapper,
} from "./input.styled";

function Input({ iconName, placeholder, handleInputChange }) {
  const handleChange = (evt) => {
    const value = evt.target.value;
    handleInputChange && handleInputChange(value);
  };

  return (
    <InputWrapperStyled>
      <InputStyled placeholder={placeholder} onChange={handleChange} />
      {iconName && (
        <InputIconWrapper>
          <IconComponent size="20px" name={iconName} />
        </InputIconWrapper>
      )}
    </InputWrapperStyled>
  );
}

export default Input;
