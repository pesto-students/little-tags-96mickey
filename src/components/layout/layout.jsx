import { Header, Footer } from "components";
import React from "react";
import { LayoutStyled, MainSection } from "./layout.styled";

export const Layout = (props) => {
  return (
    <LayoutStyled>
      <Header />
      <MainSection>{props.children}</MainSection>
      <Footer />
    </LayoutStyled>
  );
};
