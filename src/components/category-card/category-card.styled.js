import styled from "styled-components";
import { hexToRGBA } from "./../../utils/hex-to-rgba";
export const CategoryCardStyled = styled.div`
  font-size: ${(props) => props.theme.fontSizes.font_30};
  background: ${(props) => props.image};

  border-radius: ${(props) => props.theme.spaces.space_8};
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  :hover {
    box-shadow: ${(props) => props.theme.spaces.space_5}
      ${(props) => props.theme.spaces.space_5}
      ${(props) => props.theme.spaces.space_5}
      ${(props) => hexToRGBA(props.theme.colors.dark, 0.5)};
  }
`;

export const CategoryImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  transition: all 0.2s ease-in-out;
  opacity: 0.9;
  :hover {
    transform: scale(1.3);
    opacity: 1;
  }
`;

export const CategoryInfo = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 2rem;
  font-size: ${(props) => props.theme.fontSizes.font_20};
  color: white;
  background-color: ${(props) => hexToRGBA(props.theme.colors.dark, 0.5)};
`;
