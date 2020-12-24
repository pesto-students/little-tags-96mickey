import React from "react";

//styles
import { HeaderStyled, HeaderWrapperStyled } from "./header.styled";

export const Header = (props) => {
  return (
    <HeaderWrapperStyled>
      <HeaderStyled textColor="black">hello</HeaderStyled>
    </HeaderWrapperStyled>
  );
};
