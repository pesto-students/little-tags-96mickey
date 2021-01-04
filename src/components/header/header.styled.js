import styled from "styled-components";

export const HeaderWrapperStyled = styled.div`
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  background-color: ${(props) =>
    props.scrollPosition > 100 && props.theme.colors.light};
`;

export const HeaderStyled = styled.div`
  width: 100%;
  background-color: transparent;
  margin: 25px 45px;
  display: flex;
  align-items: center;
`;

export const HeaderBrandNameStyled = styled.div`
  font-family: ${(props) => props.theme.headingFont};
  font-size: 40px;
  line-height: 1.2;
  color: ${(props) =>
    props.isHeaderInverse ? props.theme.colors.dark : props.theme.colors.light};
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
  color: ${(props) =>
    props.isHeaderInverse ? props.theme.colors.dark : props.theme.colors.light};
  cursor: pointer;
`;

export const HeaderUserLogo = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  margin-right: 10px;
`;
