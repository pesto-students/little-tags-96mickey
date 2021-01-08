import React from "react";

// styles
import { IconWrapperStyled } from "./icon.component.styled";

function IconComponent({ name, handleClick, size, color }) {
  return (
    <IconWrapperStyled
      className={`fa ${name}`}
      size={size}
      onClick={handleClick}
      color={color}
    ></IconWrapperStyled>
  );
}

IconComponent.defaultProps = {
  size: "20px",
  color: "black",
};
export default IconComponent;
