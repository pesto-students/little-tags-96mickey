import styled from "styled-components";

export const FooterStyled = styled.div`
  background-color: ${(props) => props.theme.colors.tuna};
  padding: 45px 45px ${(props) => props.theme.spaces.space_30};
`;

export const FooterWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FooterContactInfoStyled = styled.div`
  width: 25%;
  padding: 0 30px;
`;

export const FooterCategoriesStyled = styled.div`
  width: 50%;
`;

export const FooterContactUsStyled = styled.div`
  width: 25%;
`;

export const FooterTitleStyled = styled.div`
  font-family: ${(props) => props.theme.footerFontBold};
  font-size: ${(props) => props.theme.fontSizes.font_30};
  line-height: 1.19;
  letter-spacing: 0.67px;
  color: ${(props) => props.theme.colors.secondaryText};
  margin-bottom: ${(props) => props.theme.spaces.space_30};
`;

export const FooterCategoryTextStyled = styled.div`
  font-family: ${(props) => props.theme.footerFontReg};
  font-size: ${(props) => props.theme.fontSizes.font_20};
  line-height: 1.2;
  letter-spacing: 0.53px;
  color: ${(props) =>
    props.isColorLight
      ? props.theme.colors.light
      : props.theme.colors.doveGray};
  margin-bottom: ${(props) => props.theme.spaces.space_15};
`;

export const FooterCardIconStyled = styled.img`
  margin-right: ${(props) => props.theme.spaces.space_15};
  opacity: 0.7;
  cursor: pointer;
`;

export const FooterSeparator = styled.div`
  width: 100%;
  margin-top: ${(props) => props.theme.spaces.space_50};
  border-bottom: solid 1px ${(props) => props.theme.colors.doveGray};
`;

export const FooterBottomSeparator = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => props.theme.spaces.space_50};
`;

export const FooterCategoryLinkStyled = styled.div`
  pointer-events: ${(props) => !props.goTo && "none"};
`;
