import styled from "styled-components";

export const ProductSectionComponentTitleStyled = styled.div`
  font-family: ${(props) => props.theme.headingFont};
  font-size: 61px;
  line-height: 1.2;
  text-align: center;
  width: 100%;
  margin-top: 70px;
  color: ${(props) => props.theme.colors.dark};
`;

export const ProductSectionCategoryImageStyled = styled.div`
  height: ${(props) => props.height || "250px"};
  width: 100%;
  margin-right: 10px;
`;

export const ProductSectionCategoryWrapperStyled = styled.div`
  padding: 60px;
  display: grid;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
`;

export const HomeBannerProductImages = styled.div`
  padding: 80px 50px;
`;

export const CarouselSliderWrapper = styled.div`
  padding: 50px;
`;

export const ProductCarouselImageStyled = styled.img`
  height: 230px;
`;

export const ProductSectionRecordStyledWrapper = styled.div`
  min-height: 250px;
`;

export const ProuctImageTextOverlayStyled = styled.div`
  display: none;
`;

export const ProductCarouselImageWrapperStyled = styled.div`
  :hover {
    .view-now-text {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
      background: rgba(255, 255, 255, 0.6);
      opacity: 0.95;
      padding: 20px;
      font-family: ${(props) => props.theme.bodyFont};
    }
  }
`;
