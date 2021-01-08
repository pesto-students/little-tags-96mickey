import styled, { css } from "styled-components";

export const HeaderWrapperStyled = styled.div`
  ${(props) =>
    props.isHomeRoute &&
    css`
      position: fixed;
      background-color: ${(props) =>
        props.scrollPosition > 100 && props.theme.colors.light};
    `}

  ${(props) =>
    !props.isHomeRoute &&
    css`
      position: ${(props) =>
        props.scrollPosition > 100 ? "fixed" : "relative"};
      background-color: ${(props) => props.theme.colors.light};
    `}
  
  top: 0;
  z-index: 99;
  width: 100%;
`;

export const HeaderStyled = styled.div`
  background-color: transparent;
  padding: 25px 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBrandNameStyled = styled.div`
  font-family: ${(props) => props.theme.headingFont};
  font-size: 40px;
  line-height: 1.2;
  ${(props) =>
    props.isHomeRoute &&
    css`
      color: ${(props) =>
        props.isHeaderInverse
          ? props.theme.colors.dark
          : props.theme.colors.light};
    `}
  margin: 0 30px;
  position: relative;
  top: 5px;
`;

export const HeaderComponentInputWrapperStyled = styled.div`
  width: 50%;
`;

export const HeaderLoginStyled = styled.div`
  margin-left: 40px;
  font-family: ${(props) => props.theme.bodyFont};
  font-size: 30px;
  line-height: 1.2;
  text-align: left;
  ${(props) =>
    props.isHomeRoute &&
    css`
      color: ${(props) =>
        props.isHeaderInverse
          ? props.theme.colors.dark
          : props.theme.colors.light};
    `}
  cursor: pointer;
`;

export const HeaderUserLogo = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  margin-right: 10px;
`;

export const HeaderIconComponentWrapperStyled = styled.div`
  position: relative;
`;

export const HeaderIconComponentBadgeStyled = styled.div`
  position: absolute;
  top: 0;
  right: -10px;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  color: white;
  background: rgba(255, 0, 0, 0.85);
`;

export const HeaderIconComponentBadgeTextStyled = styled.div`
  margin-left: 6px;
  font-size: 15px;
`;
  
export const CartWrapper = styled.div`
  display: inline-block;
  height: 40px;
  min-width: 30px;
`;

export const CartCount = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  bottom: 4px;
  left: 30px;
  background-color: red;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  color: white
`;

export const CartIcon = styled.div`
  position: absolute;
`;
