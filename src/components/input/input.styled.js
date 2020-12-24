import styled from "styled-components";

export const InputStyled = styled.input`
  padding: ${(props) => props.theme.spaces.space_10} 24px
    ${(props) => props.theme.spaces.space_10} 45px;
  border-radius: ${(props) => props.theme.spaces.space_10};
  box-shadow: 0 0 ${(props) => props.theme.spaces.space_xs} 0
    rgba(10, 91, 106, 0.16);
  background-color: ${(props) => props.theme.colors.light};
  max-height: 40px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-size: ${(props) => props.theme.fontSizes.font_20};
  width: 100%;
  border: ${(props) => props.theme.spaces.space_1} transparent;

  :focus {
    outline: none;
  }
`;

export const InputWrapperStyled = styled.div`
  position: relative;
`;

export const InputIconWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.theme.spaces.space_10};
  left: ${(props) => props.theme.spaces.space_15};
`;
