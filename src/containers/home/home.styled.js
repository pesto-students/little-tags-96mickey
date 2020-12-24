import styled from "styled-components";
import { hexToRGBA } from "./../../utils/hex-to-rgba";

export const HomeBannerImageStyled = styled.div`
  background-image: linear-gradient(
      ${(props) => hexToRGBA(props.theme.colors.dark, 0.5)},
      ${(props) => hexToRGBA(props.theme.colors.dark, 0.5)}
    ),
    url(${(props) => props.imgUrl});
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const HomeBannerHeroText = styled.div`
  text-align: center;
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.colors.light};
`;

export const HomeBannerTitleTextStyled = styled.div`
  font-family: ${(props) => props.theme.headingFont};
  font-size: 85px;
  line-height: 1.2;
  color: ${(props) => props.theme.colors.light};
  margin-bottom: ${(props) => props.theme.spaces.space_10};
`;

export const HomeBannerSubTitleLineStyled = styled.div`
  width: 50%;
  height: 0;
  border: solid ${(props) => props.theme.spaces.space_1}
    ${(props) => props.theme.colors.light};
`;

export const HomeBannerSubTitleWrapperStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const HomeBannerSubTitleStyled = styled.div`
  width: 100%;
  font-family: ${(props) => props.theme.bodyFont};
  font-size: ${(props) => props.theme.fontSizes.font_24};
`;
