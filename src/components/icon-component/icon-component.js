import React from "react";

// styles
import { IconWrapperStyled } from "./icon.component.styled";

function IconComponent({ name, handleClick, size }) {
  return (
    <IconWrapperStyled
      className={`fa ${name}`}
      size={size}
      onClick={handleClick}
    ></IconWrapperStyled>
  );
}

IconComponent.defaultProps = {
  size: "20px",
};
export default IconComponent;
