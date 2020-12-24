import styled, { css } from "styled-components";

import { hexToRGBA } from "./../../utils/hex-to-rgba";

export const DrawerItemStyled = styled.div`
  cursor: pointer;
  font-family: ${(props) => props.theme.bodyFont};
  font-size: ${(props) => props.theme.fontSizes.font_14};
  line-height: 1.19;
  color: ${(props) => props.theme.colors.dark};
  padding: ${(props) => props.theme.spaces.space_10}
    ${(props) => props.theme.spaces.space_28}
    ${(props) => props.theme.spaces.space_10};
  :hover {
    background-color: ${(props) => props.theme.colors.dark};
    color: ${(props) => props.theme.colors.light};
  }
`;

export const DrawerContainerWrapperStyled = styled.div`
  width: 270px;
  background-color: white;
  transition: all 0.3s ease-in-out;
  transform: translate(-270px);
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 9999;
  box-shadow: ${(props) =>
    props.isOpen &&
    css`
      ${props.theme.spaces.space_xs} 0 ${props.theme.spaces.space_xs} 0  ${(
        props
      ) => hexToRGBA(props.theme.colors.dark, 0.16)}
    `};
  transform: ${(props) => props.isOpen && "translate(0)"};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: ${(props) => props.theme.spaces.space_22} 0
    ${(props) => props.theme.spaces.space_36};
  border-radius: 0 ${(props) => props.theme.spaces.space_20}
    ${(props) => props.theme.spaces.space_20} 0;
`;

export const DrawerContentWrapperStyled = styled.div``;

export const DrawerContainerOverlayStyled = styled.div`
  ${(props) =>
    props.isOpen &&
    css`
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${(props) => hexToRGBA(props.theme.colors.dark, 0.16)};
      z-index: 2;
      transition: 0.5s ease;
    `}
`;

export const DrawerContentTitleStyled = styled.span`
  font-family: MillionNotes;
  font-size: ${(props) => props.theme.fontSizes.font_30};
  line-height: 1.2;
  text-align: left;
  color: ${(props) => props.theme.colors.dark};
`;

export const DrawerButtonWrapper = styled.div`
  width: 230px;
  min-height: 67px;
  align-self: center;
`;

export const DrawerMenuTitleStyled = styled.div`
  margin: ${(props) => props.theme.spaces.space_30}
    ${(props) => props.theme.spaces.space_25}
    ${(props) => props.theme.spaces.space_14};
  font-family: ${(props) => props.theme.headingFont};
  font-size: ${(props) => props.theme.fontSizes.font_16};
  line-height: 1.2;
  text-align: left;
  color: ${(props) => props.theme.colors.dark};
`;

export const DrawerContentUsernameBoxWrapperStyled = styled.div`
  background-color: ${(props) => props.theme.colors.dark};
  margin: ${(props) => props.theme.spaces.space_20} auto
    ${(props) => props.theme.spaces.space_30};
  padding: ${(props) => props.theme.spaces.space_8}
    ${(props) => props.theme.spaces.space_20};
  display: flex;
  align-items: center;
`;

export const DrawerContentUsernameContentWrapperStyled = styled.div`
  font-family: ${(props) => props.theme.bodyFont};
  font-size: ${(props) => props.theme.fontSizes.font_16};
  line-height: 1.2;
  text-align: left;
  color: ${(props) => props.theme.colors.light};
`;

export const DrawerContentUsernameIconStyled = styled.div`
  width: 25px;
  height: 25px;
  border: solid ${(props) => props.theme.spaces.space_2}
    ${(props) => props.theme.colors.light};
  border-radius: 50%;
  margin-right: ${(props) => props.theme.spaces.space_10};
  color: ${(props) => props.theme.colors.light};
  display: flex;
  justify-content: center;
`;

export const DrawerContentsIconWrapperStyled = styled.span`
  margin: 0 ${(props) => props.theme.spaces.space_10}; ;
`;

export const DrawerContentTitleWrapperStyled = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 0 ${(props) => props.theme.spaces.space_20};
`;
